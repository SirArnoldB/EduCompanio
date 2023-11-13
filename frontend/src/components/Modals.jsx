import { useEffect, useState } from "react";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import PropTypes from "prop-types";

/**
 * Renders a set of modals for viewing, editing, adding, and deleting items.
 * @param {Object} props - The component props.
 * @param {boolean} props.viewModalOpen - Whether the view modal is open.
 * @param {function} props.handleViewModalClose - Function to close the view modal.
 * @param {function} props.handleEditModalOpen - Function to open the edit modal.
 * @param {function} props.handleDeleteModalOpen - Function to open the delete modal.
 * @param {Object} props.modalItem - The item to display in the modals.
 * @param {string} props.boardType - The type of board the item belongs to.
 * @param {boolean} props.editModalOpen - Whether the edit modal is open.
 * @param {function} props.handleEditModalClose - Function to close the edit modal.
 * @param {boolean} props.addModalOpen - Whether the add modal is open.
 * @param {function} props.handleAddModalClose - Function to close the add modal.
 * @param {boolean} props.deleteModalOpen - Whether the delete modal is open.
 * @param {function} props.handleDeleteModalClose - Function to close the delete modal.
 * @returns {JSX.Element} The Modals component.
 */
const Modals = ({
  viewModalOpen,
  handleViewModalClose,
  handleEditModalOpen,
  handleDeleteModalOpen,
  modalItem,
  boardType,
  editModalOpen,
  handleEditModalClose,
  addModalOpen,
  handleAddModalClose,
  deleteModalOpen,
  handleDeleteModalClose,
}) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(modalItem);
  }, [modalItem]);

  return (
    <>
      {modalItem && (
        <>
          <ViewModal
            open={viewModalOpen}
            handleClose={handleViewModalClose}
            onEdit={handleEditModalOpen}
            onDelete={handleDeleteModalOpen}
            item={item}
            itemType={boardType}
          />
          <EditModal
            open={editModalOpen}
            handleClose={handleEditModalClose}
            item={item}
            itemType={boardType}
          />
          <DeleteModal
            open={deleteModalOpen}
            handleClose={handleDeleteModalClose}
            item={item}
            itemType={boardType}
          />
          <AddModal
            open={addModalOpen}
            handleClose={handleAddModalClose}
            itemType={boardType}
          />
        </>
      )}
    </>
  );
};

Modals.propTypes = {
  viewModalOpen: PropTypes.bool.isRequired,
  handleViewModalClose: PropTypes.func.isRequired,
  handleEditModalOpen: PropTypes.func.isRequired,
  handleDeleteModalOpen: PropTypes.func.isRequired,
  modalItem: PropTypes.object.isRequired,
  boardType: PropTypes.string.isRequired,
  editModalOpen: PropTypes.bool.isRequired,
  handleEditModalClose: PropTypes.func.isRequired,
  addModalOpen: PropTypes.bool.isRequired,
  handleAddModalClose: PropTypes.func.isRequired,
  deleteModalOpen: PropTypes.bool.isRequired,
  handleDeleteModalClose: PropTypes.func.isRequired,
};

export default Modals;
