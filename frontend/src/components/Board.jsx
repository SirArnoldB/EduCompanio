import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import DroppableColumn from "./DroppableColumn";
import Modals from "./Modals";
import LoadingSpinner from "./LoadingSpinner";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import ProjectsAPI from "../services/projects";

/**
 * A component that displays a board with draggable and droppable columns and items.
 * @param {Object} props - The props object.
 * @param {string} props.boardType - The type of board to display (note, internship, or project).
 * @returns {JSX.Element} - The Board component.
 */
const Board = ({ boardType, columns }) => {
  const [boardColumns, setBoardColumns] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [filteredColumns, setFilteredColumns] = useState(null);

  useEffect(() => {
    setBoardColumns(columns);
  }, [columns]);

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
      console.log("Updating item: ", item);
      const statusId = destination.droppableId;
      console.log("Status ID: ", statusId);
      const itemId = item.id;

      switch (boardType) {
        case "internship":
          InternshipsAPI.updateInternship(itemId, {
            ...item,
            status_id: statusId,
            updated_at: new Date(),
          });
          break;
        case "note":
          NotesAPI.updateNote(itemId, {
            ...item,
            status_id: statusId,
            updated_at: new Date(),
          });
          break;
        case "project":
          ProjectsAPI.updateProject(itemId, {
            ...item,
            status_id: statusId,
            updated_at: new Date(),
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
  columns: PropTypes.object.isRequired,
};

export default Board;
