import { Modal, Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";

/**
 * A modal component for deleting an item.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Determines whether the modal is open or not.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {Object} props.item - The item to be deleted.
 * @param {string} props.itemType - The type of item being deleted.
 * @param {function} props.onDelete - The function to handle deleting the item.
 * @returns {JSX.Element} - The DeleteModal component.
 */
const DeleteModal = ({ open, handleClose, item, itemType, onDelete }) => {
  const handleDelete = () => {
    onDelete(item);
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
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h6" component="h2">
          Are you sure you want to delete this {itemType}?
        </Typography>
        <Typography variant="body1" component="p">
          {item?.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  itemType: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteModal;
