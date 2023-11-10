import { useState, useEffect } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import StrictModeDroppable from "./StrictModeDroppable";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";
import BoardItem from "./BoardItem";

/**
 * A component that displays a board with draggable and droppable columns and items.
 * @param {Object} props - The props object.
 * @param {string} props.boardType - The type of board to display (note, internship, or project).
 * @returns {JSX.Element} - The Board component.
 */
const Board = ({ boardType }) => {
  const [columns, setColumns] = useState();
  const [searchInput, setSearchInput] = useState("");

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    switch (boardType) {
      case "note": {
        const notesItems = [
          {
            id: uuidv4(),
            title: "First Note",
            content: `This is the first note with a lot of content. I am the one doing this. Yes! This is the first note with a lot of content.
              I am the one doing this. Yes! This is the first note with a lot of content. I am the one doing this. Yes!
              This is the first note with a lot of content. I am the one doing this. Yes! This is the first note with a lot of content.
              I am the one doing this. Yes! This is the first note with a lot of content. I am the one doing this. Yes!
              This is the first note with a lot of content. I am the one doing this. Yes! This is the first note with a lot of content.
              I am the one doing this. Yes! This is the first note with a lot of content. I am the one doing this. Yes!
              This is the first note with a lot of content. I am the one doing this. Yes! This is the first note with a lot of content.
              I am the one doing this. Yes! This is the first note with a lot of content. I am the one doing this. Yes!
              This is the first note with a lot of content. I am the one doing this. Yes! This is the first note with a lot of content.
              I am the one doing this. Yes! This is the first note with a lot of content. I am the one doing this. Yes!
              `,
            status: "Active",
            category: "💡 Brain Sparks",
          },
          {
            id: uuidv4(),
            title: "Second Note",
            content: "This is the second note",
            status: "Active",
            category: "🤔 Mind Maze",
          },
        ];
        const notesColumns = {
          [uuidv4()]: {
            name: "💡 Brain Sparks",
            items: notesItems,
          },
          [uuidv4()]: {
            name: "🤔 Mind Maze",
            items: [],
          },
          [uuidv4()]: {
            name: "📝 Snippets",
            items: [],
          },
        };
        setColumns(notesColumns);
        break;
      }
      case "internship": {
        const internshipsItems = [
          {
            id: uuidv4(),
            company: "First Company",
            position: "First Position",
            content: "This is the first internship",
            status: "Applied",
            url: "https://www.google.com",
            category: "Applied",
          },
          {
            id: uuidv4(),
            company: "Second Company",
            position: "Second Position",
            content: "This is the second internship",
            status: "Applied",
            url: "https://www.google.com",
            category: "Screen",
          },
          {
            id: uuidv4(),
            company: "Third Company",
            position: "Third Position",
            content: "This is the third internship",
            status: "Applied",
            url: "https://www.google.com",
            category: "Interviewing",
          },
        ];
        const internshipsColumns = {
          [uuidv4()]: {
            name: "Applied",
            items: internshipsItems,
          },
          [uuidv4()]: {
            name: "Screen",
            items: [],
          },
          [uuidv4()]: {
            name: "Interviewing",
            items: [],
          },
          [uuidv4()]: {
            name: "Offer",
            items: [],
          },
          [uuidv4()]: {
            name: "Rejected",
            items: [],
          },
        };
        setColumns(internshipsColumns);
        break;
      }
      case "project": {
        const projectsItems = [
          {
            id: uuidv4(),
            title: "First Project",
            content: "This is the first project",
            status: "Active",
            category: "💡 Brain Sparks",
            url: "https://www.google.com",
          },
          {
            id: uuidv4(),
            title: "Second Project",
            content: "This is the second project",
            status: "Active",
            category: "🤔 Mind Maze",
            url: "https://www.google.com",
          },
          {
            id: uuidv4(),
            title: "Third Project",
            content: "This is the third project",
            status: "Active",
            category: "📝 Snippets",
            url: "https://www.google.com",
          },
        ];
        const projectsColumns = {
          [uuidv4()]: {
            name: "Not Started",
            items: projectsItems,
          },
          [uuidv4()]: {
            name: "In Progress",
            items: [],
          },
          [uuidv4()]: {
            name: "Completed",
            items: [],
          },
        };
        setColumns(projectsColumns);
        break;
      }
      default:
        break;
    }
  }, [boardType]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
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

  const handleDelete = (item) => {
    console.log("Deleting item: ", item);
    setDeleteModalOpen(false);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
  };

  const handleAdd = (item) => {
    console.log("Adding item: ", item);
    setAddModalOpen(false);
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearchInput}
        setAddModalOpen={setAddModalOpen}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        {columns && (
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "calc(100vh - 64px)",
                  }}
                  key={columnId}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: "#010C80",
                    }}
                  >
                    {column.name}
                  </Typography>
                  <Box
                    sx={{
                      margin: 0.9,
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  >
                    <StrictModeDroppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <Box
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            sx={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 1,
                              width: 350,
                              height: "100%",
                            }}
                          >
                            {column.items && column.items.length > 0 ? (
                              column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <Box
                                          onClick={() =>
                                            handleViewModalOpen(item)
                                          }
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          sx={{
                                            userSelect: "none",
                                            padding: 0.5,
                                            margin: "0 0 8px 0",
                                            backgroundColor: snapshot.isDragging
                                              ? "#154c79"
                                              : "#263B4A",
                                            color: "#f5f5f5",
                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          <BoardItem
                                            item={item}
                                            itemType={boardType}
                                          />
                                        </Box>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })
                            ) : (
                              <Typography
                                variant="body1"
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontSize: "1.2rem",
                                  color: "#888",
                                }}
                              >
                                Nothing here yet!
                              </Typography>
                            )}

                            {provided.placeholder}
                          </Box>
                        );
                      }}
                    </StrictModeDroppable>
                  </Box>
                </Box>
              );
            })}
          </DragDropContext>
        )}
      </Box>

      {/* Modals */}
      <ViewModal
        open={viewModalOpen}
        handleClose={handleViewModalClose}
        onEdit={handleEditModalOpen}
        onDelete={handleDeleteModalOpen}
        item={modalItem}
        itemType={boardType}
      />
      <EditModal
        open={editModalOpen}
        handleClose={handleEditModalClose}
        item={modalItem}
        itemType={boardType}
      />
      <DeleteModal
        open={deleteModalOpen}
        handleClose={handleDeleteModalClose}
        item={modalItem}
        itemType={boardType}
        onDelete={handleDelete}
      />
      <AddModal
        open={addModalOpen}
        handleClose={handleAddModalClose}
        onSave={handleAdd}
        itemType={boardType}
      />
    </>
  );
};

Board.propTypes = {
  boardType: PropTypes.string.isRequired,
};

export default Board;
