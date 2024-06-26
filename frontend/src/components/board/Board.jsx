import { useState, useEffect, useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import SearchBar from "../common/SearchBar";
import DroppableColumn from "./DroppableColumn";
import Modals from "../modals/Modals";
import LoadingSpinner from "../common/LoadingSpinner";
import JobsAPI from "../../services/jobs";
import NotesAPI from "../../services/notes";
import ProjectsAPI from "../../services/projects";
import { BoardContext } from "../../contexts/BoardContext";
import { toast } from "react-toastify";
import Notify from "../Toast/Notify";

/**
 * A component that displays a board with draggable and droppable columns and items.
 * @param {Object} props - The props object.
 * @param {string} props.boardType - The type of board to display (note, job, or project).
 * @returns {JSX.Element} - The Board component.
 */
const Board = ({ boardType }) => {
  const [boardColumns, setBoardColumns] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [filteredColumns, setFilteredColumns] = useState(null);
  const [state, dispatch] = useContext(BoardContext);

  useEffect(() => {
    switch (boardType) {
      case "job":
        setBoardColumns(state.columns.jobs);
        break;
      case "note":
        setBoardColumns(state.columns.notes);
        break;
      case "project":
        setBoardColumns(state.columns.projects);
        break;
      default:
        break;
    }
  }, [boardType, state.columns]);

  useEffect(() => {
    if (boardColumns) {
      const newFilteredColumns = {};
      Object.entries(boardColumns).forEach(([columnId, column]) => {
        const filteredItems = column.items.filter((item) => {
          return (
            item.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.position?.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.company?.toLowerCase().includes(searchInput.toLowerCase())
          );
        });
        newFilteredColumns[columnId] = { ...column, items: filteredItems };
      });
      setFilteredColumns(newFilteredColumns);
    }
  }, [searchInput, boardColumns]);

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  const onDragEnd = (result, boardColumns, setBoardColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = boardColumns[source.droppableId];
      const destColumn = boardColumns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setBoardColumns({
        ...boardColumns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });

      // Update the status of the item in the database
      const item = removed;
      const statusId = destination.droppableId;
      const itemId = item.id;
      const accessToken = state.user.stsTokenManager.accessToken;

      switch (boardType) {
        case "job":
          JobsAPI.updateJob(
            itemId,
            {
              ...item,
              statusId: statusId,
            },
            accessToken
          )
            .then((res) => {
              dispatch({
                type: "UPDATE_JOB",
                payload: {
                  updatedItem: res,
                  originalStatusId: source.droppableId,
                },
              });
              Notify("Job moved successfully", toast.TYPE.SUCCESS);
            })
            .catch((err) => {
              Notify(`Job move failed: ${err.message}`, toast.TYPE.ERROR);
            });
          break;
        case "note":
          NotesAPI.updateNote(
            itemId,
            {
              ...item,
              statusId: statusId,
            },
            accessToken
          )
            .then((res) => {
              dispatch({
                type: "UPDATE_NOTE",
                payload: {
                  updatedItem: res,
                  originalStatusId: source.droppableId,
                },
              });
              Notify("Note moved successfully", toast.TYPE.SUCCESS);
            })
            .catch((err) => {
              Notify(`Note move failed: ${err.message}`, toast.TYPE.ERROR);
            });
          break;
        case "project":
          ProjectsAPI.updateProject(
            itemId,
            {
              ...item,
              statusId: statusId,
            },
            accessToken
          )
            .then((res) => {
              dispatch({
                type: "UPDATE_PROJECT",
                payload: {
                  updatedItem: res,
                  originalStatusId: source.droppableId,
                },
              });
              Notify("Project moved successfully", toast.TYPE.SUCCESS);
            })
            .catch((err) => {
              Notify(`Project move failed: ${err.message}`, toast.TYPE.ERROR);
            });
          break;
        default:
          break;
      }
    } else {
      const column = boardColumns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setBoardColumns({
        ...boardColumns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const handleViewModalOpen = (item) => {
    setModalItem(item);
    setViewModalOpen(true);
  };

  const handleViewModalClose = () => {
    setViewModalOpen(false);
  };

  const handleEditModalOpen = (item) => {
    setModalItem(item);
    setViewModalOpen(false);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleDeleteModalOpen = (item) => {
    setModalItem(item);
    setViewModalOpen(false);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearchInput}
        setAddModalOpen={setAddModalOpen}
        boardType={boardType}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {filteredColumns ? (
          <DragDropContext
            onDragEnd={(result) =>
              onDragEnd(result, filteredColumns, setFilteredColumns)
            }
          >
            {Object.entries(filteredColumns).map(([columnId, column]) => {
              return (
                <DroppableColumn
                  column={column}
                  columnId={columnId}
                  boardType={boardType}
                  handleViewModalOpen={handleViewModalOpen}
                  key={columnId}
                />
              );
            })}
          </DragDropContext>
        ) : (
          <LoadingSpinner label="board items" />
        )}
      </Box>

      {/* Modals */}
      <Modals
        viewModalOpen={viewModalOpen}
        handleViewModalClose={handleViewModalClose}
        handleEditModalOpen={handleEditModalOpen}
        handleDeleteModalOpen={handleDeleteModalOpen}
        modalItem={modalItem}
        boardType={boardType}
        editModalOpen={editModalOpen}
        handleEditModalClose={handleEditModalClose}
        addModalOpen={addModalOpen}
        handleAddModalClose={handleAddModalClose}
        deleteModalOpen={deleteModalOpen}
        handleDeleteModalClose={handleDeleteModalClose}
      />
    </>
  );
};

Board.propTypes = {
  boardType: PropTypes.string.isRequired,
};

export default Board;
