import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";
import EditItem from "./EditItem";

/**
 * A modal component for editing an item.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Whether the modal is open or not.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {Object} props.item - The item to be edited.
 * @param {string} props.itemType - The type of item being edited.
 * @returns {JSX.Element} - The EditModal component.
 */
const EditModal = ({ open, handleClose, item, itemType }) => {
  const handleSubmit = () => {
    handleClose();
  };

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
        <EditItem
          item={item}
          onSave={handleSubmit}
          onCancel={handleClose}
          itemType={itemType}
        />
      </Box>
    </Modal>
  );
};

EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.object,
  itemType: PropTypes.string.isRequired,
};

export default EditModal;
