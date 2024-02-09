import { useContext } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import ProjectsAPI from "../services/projects";
import { BoardContext } from "../contexts/BoardContext";
import { toast } from "react-toastify";
import Notify from "./Toast/Notify";

/**
 * A modal component for deleting an item.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Determines whether the modal is open or not.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {Object} props.item - The item to be deleted.
 * @param {string} props.itemType - The type of item being deleted.
 * @returns {JSX.Element} - The DeleteModal component.
 */
const DeleteModal = ({ open, handleClose, item, itemType }) => {
  const [state, dispatch] = useContext(BoardContext);

  const handleDelete = () => {
    const accessToken = state.user.stsTokenManager.accessToken;

    switch (itemType) {
      case "internship":
        InternshipsAPI.deleteInternship(item.id, accessToken)
          .then((res) => {
            dispatch({ type: "DELETE_INTERNSHIP", payload: res });
            Notify("Internship deleted successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            Notify(
              `Internship deletion failed: ${err.message}`,
              toast.TYPE.ERROR
            );
          });
        break;
      case "note":
        NotesAPI.deleteNote(item.id, accessToken)
          .then((res) => {
            dispatch({ type: "DELETE_NOTE", payload: res });
            Notify("Note deleted successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            Notify(`Note deletion failed: ${err.message}`, toast.TYPE.ERROR);
          });
        break;
      case "project":
        ProjectsAPI.deleteProject(item.id, accessToken)
          .then((res) => {
            dispatch({ type: "DELETE_PROJECT", payload: res });
            Notify("Project deleted successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            Notify(`Project deletion failed: ${err.message}`, toast.TYPE.ERROR);
          });
        break;
      default:
        break;
    }

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
};

export default DeleteModal;
