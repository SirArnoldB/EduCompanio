import { useState, useEffect } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import StrictModeDroppable from "./StrictModeDroppable";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Board = ({ boardType }) => {
  const [columns, setColumns] = useState();

  useEffect(() => {
    switch (boardType) {
      case "notes": {
        const notesItems = [
          { id: uuidv4(), content: "First Note" },
          { id: uuidv4(), content: "Second Note" },
          { id: uuidv4(), content: "Third Note" },
          { id: uuidv4(), content: "Fourth Note" },
          { id: uuidv4(), content: "Fifth Note" },
        ];
        const notesColumns = {
          [uuidv4()]: {
            name: "Experiences",
            items: notesItems,
          },
          [uuidv4()]: {
            name: "Ideas",
            items: [],
          },
          [uuidv4()]: {
            name: "Other",
            items: [],
          },
        };
        setColumns(notesColumns);
        break;
      }
      case "internships": {
        const internshipsItems = [
          { id: uuidv4(), content: "First Internship" },
          { id: uuidv4(), content: "Second Internship" },
          { id: uuidv4(), content: "Third Internship" },
          { id: uuidv4(), content: "Fourth Internship" },
          { id: uuidv4(), content: "Fifth Internship" },
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
      case "projects": {
        const projectsItems = [
          { id: uuidv4(), content: "First Project" },
          { id: uuidv4(), content: "Second Project" },
          { id: uuidv4(), content: "Third Project" },
          { id: uuidv4(), content: "Fourth Project" },
          { id: uuidv4(), content: "Fifth Project" },
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

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      {columns && (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
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
                <Typography variant="h5">{column.name}</Typography>
                <Box
                  sx={{
                    margin: 0.5,
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
                            width: 300,
                            height: "100%",
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <Box
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      sx={{
                                        userSelect: "none",
                                        padding: 2,
                                        margin: "0 0 8px 0",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </Box>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
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
  );
};

Board.propTypes = {
  boardType: PropTypes.string.isRequired,
};

export default Board;
