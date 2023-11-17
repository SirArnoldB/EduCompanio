import { useContext } from "react";
import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";
import AddItem from "./AddItem";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import ProjectsAPI from "../services/projects";
import { BoardContext } from "../contexts/BoardContext";
import { toast } from "react-toastify";
import Notify from "./Toast/Notify";

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
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  const handleSubmit = (newItem) => {
    switch (itemType) {
      case "internship":
        InternshipsAPI.createInternship(newItem)
          .then((res) => {
            dispatch({ type: "ADD_INTERNSHIP", payload: res });
            Notify("Internship added successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            console.log(err);
            Notify("Internship addition failed", toast.TYPE.ERROR);
          });
        break;
      case "note":
        NotesAPI.createNote(newItem)
          .then((res) => {
            dispatch({ type: "ADD_NOTE", payload: res });
            Notify("Note added successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            console.log(err);
            Notify("Note addition failed", toast.TYPE.ERROR);
          });
        break;
      case "project":
        ProjectsAPI.createProject(newItem)
          .then((res) => {
            dispatch({ type: "ADD_PROJECT", payload: res });
            Notify("Project added successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            console.log(err);
            Notify("Project addition failed", toast.TYPE.ERROR);
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
