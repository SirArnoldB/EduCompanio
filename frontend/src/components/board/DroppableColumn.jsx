import { Box, Typography } from "@mui/material";
import DraggableItem from "./DraggableItem";
import StrictModeDroppable from "./StrictModeDroppable";
import PropTypes from "prop-types";

/**
 * A component that renders a droppable column for a Kanban board.
 * @param {Object} props - The props object.
 * @param {Object} props.column - The column object containing the column's name and items.
 * @param {string} props.columnId - The ID of the column.
 * @param {string} props.boardType - The type of board (e.g. "note", "job", or "project".).
 * @param {Function} props.handleViewModalOpen - A function to handle opening a modal to view an item.
 * @param {string} props.key - The key of the component.
 * @returns {JSX.Element} - The DroppableColumn component.
 */
const DroppableColumn = ({
  column,
  columnId,
  boardType,
  handleViewModalOpen,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
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
                  overflowY: "auto",
                }}
              >
                {column.items && column.items.length > 0 ? (
                  column.items.map((item, index) => {
                    return (
                      <DraggableItem
                        item={item}
                        index={index}
                        itemType={boardType}
                        key={item.id}
                        handleViewModalOpen={handleViewModalOpen}
                      />
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
};

DroppableColumn.propTypes = {
  column: PropTypes.object.isRequired,
  columnId: PropTypes.string.isRequired,
  boardType: PropTypes.string.isRequired,
  handleViewModalOpen: PropTypes.func.isRequired,
};

export default DroppableColumn;
