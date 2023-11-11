import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";
import ViewItem from "./ViewItem";

/**
 * Renders a modal that displays the details of an item.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Determines whether the modal is open or not.
 * @param {function} props.handleClose - The function to close the modal.
 * @param {function} props.onEdit - The function to edit the item.
 * @param {function} props.onDelete - The function to delete the item.
 * @param {Object} props.item - The item to display.
 * @param {string} props.itemType - The type of the item.
 * @returns {JSX.Element} - The ViewModal component.
 */
const ViewModal = ({ open, handleClose, onEdit, onDelete, item, itemType }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: "5px",
          p: 0.5,
        }}
      >
        <ViewItem
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          itemType={itemType}
          onClose={handleClose}
        />
      </Box>
    </Modal>
  );
};

ViewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
};

export default ViewModal;
