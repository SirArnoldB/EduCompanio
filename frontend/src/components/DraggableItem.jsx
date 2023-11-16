/* eslint-disable no-unused-vars */
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import BoardItem from "./BoardItem";
import PropTypes from "prop-types";

/**
 * A draggable item component.
 * @param {Object} props - The props object.
 * @param {Object} props.item - The item to be rendered.
 * @param {string} props.key - The key of the item.
 * @param {number} props.index - The index of the item.
 * @param {string} props.itemType - The type of the item.
 * @param {Function} props.handleViewModalOpen - The function to handle opening a modal.
 * @returns {JSX.Element} - The DraggableItem component.
 */
const DraggableItem = ({ item, index, itemType, handleViewModalOpen }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Box
            onClick={() => handleViewModalOpen(item)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            sx={{
              userSelect: "none",
              padding: 0.5,
              // margin: "0 0 8px 0",
              // backgroundColor: snapshot.isDragging ? "#154c79" : "#263B4A",
              // color: "#f5f5f5",
              ...provided.draggableProps.style,
            }}
          >
            <BoardItem item={item} itemType={itemType} />
          </Box>
        );
      }}
    </Draggable>
  );
};

DraggableItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  itemType: PropTypes.string.isRequired,
  handleViewModalOpen: PropTypes.func.isRequired,
};

export default DraggableItem;
