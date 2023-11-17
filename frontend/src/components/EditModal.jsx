import { useContext } from "react";
import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";
import EditItem from "./EditItem";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import ProjectsAPI from "../services/projects";
import { BoardContext } from "../contexts/BoardContext";
import { toast } from "react-toastify";
import Notify from "./Toast/Notify";

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
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  const handleSubmit = (updatedItem) => {
    switch (itemType) {
      case "internship":
        InternshipsAPI.updateInternship(
          updatedItem.id,
          {
            ...updatedItem,
            updated_at: new Date(),
          },
          state.user.accesstoken
        )
          .then((res) => {
            dispatch({
              type: "UPDATE_INTERNSHIP",
              payload: {
                updatedItem: res,
                original_status_id: item.status_id,
              },
            });
            Notify("Internship updated successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            console.log(err);
            Notify("Internship update failed", toast.TYPE.ERROR);
          });
        break;
      case "note":
        NotesAPI.updateNote(
          updatedItem.id,
          {
            ...updatedItem,
            updated_at: new Date(),
          },
          state.user.accesstoken
        )
          .then((res) => {
            dispatch({
              type: "UPDATE_NOTE",
              payload: {
                updatedItem: res,
                original_status_id: item.status_id,
              },
            });
            Notify("Note updated successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            console.log(err);
            Notify("Note update failed", toast.TYPE.ERROR);
          });
        break;
      case "project":
        ProjectsAPI.updateProject(
          updatedItem.id,
          {
            ...updatedItem,
            updated_at: new Date(),
          },
          state.user.accesstoken
        )
          .then((res) => {
            dispatch({
              type: "UPDATE_PROJECT",
              payload: {
                updatedItem: res,
                original_status_id: item.status_id,
              },
            });
            Notify("Project updated successfully", toast.TYPE.SUCCESS);
          })
          .catch((err) => {
            console.log(err);
            Notify("Project update failed", toast.TYPE.ERROR);
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
