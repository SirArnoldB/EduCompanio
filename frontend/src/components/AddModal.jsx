import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";
import AddItem from "./AddItem";

/**
 * Renders a modal for adding an item of a specified type.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Whether the modal is open or not.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {string} props.itemType - The type of item to add.
 * @param {function} props.onSave - The function to handle saving the added item.
 * @returns {JSX.Element} - The AddModal component.
 */
const AddModal = ({ open, handleClose, itemType, onSave }) => {
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
        <AddItem onSave={onSave} onCancel={handleClose} itemType={itemType} />
      </Box>
    </Modal>
  );
};

AddModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddModal;
