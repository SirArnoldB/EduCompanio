import { useContext } from "react";
import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";
import AddItem from "./AddItem";
import JobsAPI from "../../services/jobs";
import NotesAPI from "../../services/notes";
import ProjectsAPI from "../../services/projects";
import { BoardContext } from "../../contexts/BoardContext";
import { toast } from "react-toastify";
import Notify from "../Toast/Notify";

/**
 * Renders a modal for adding an item of a specified type.
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Whether the modal is open or not.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {string} props.itemType - The type of item to add.
 * @param {function} props.onSave - The function to handle saving the added item.
 * @returns {JSX.Element} - The AddModal component.
 */
const AddModal = ({ open, handleClose, itemType }) => {
  const [state, dispatch] = useContext(BoardContext);

  const handleSubmit = (newItem) => {
    const accessToken = state.user.stsTokenManager.accessToken;

    switch (itemType) {
      case "job":
        JobsAPI.createJob(newItem, accessToken)
          .then((res) => {
            dispatch({ type: "ADD_JOB", payload: res });
            Notify("Job added successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            Notify(`Job addition failed: ${err.message}`, toast.TYPE.ERROR);
          });
        break;
      case "note":
        NotesAPI.createNote(newItem, accessToken)
          .then((res) => {
            dispatch({ type: "ADD_NOTE", payload: res });
            Notify("Note added successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            Notify(`Note addition failed: ${err.message}`, toast.TYPE.ERROR);
          });
        break;
      case "project":
        ProjectsAPI.createProject(newItem, accessToken)
          .then((res) => {
            dispatch({ type: "ADD_PROJECT", payload: res });
            Notify("Project added successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            Notify(`Project addition failed: ${err.message}`, toast.TYPE.ERROR);
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
          borderRadius: "5px",
          p: 0.5,
        }}
      >
        <AddItem
          onSave={handleSubmit}
          onCancel={handleClose}
          itemType={itemType}
        />
      </Box>
    </Modal>
  );
};

AddModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
};

export default AddModal;
