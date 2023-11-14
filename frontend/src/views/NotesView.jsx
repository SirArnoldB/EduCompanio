import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Board from "../components/Board";
import NotesAPI from "../services/notes";
import StatusesAPI from "../services/statuses";
import LoadingSpinner from "../components/LoadingSpinner";

/**
 * Renders a view for displaying notes.
 * @returns {JSX.Element}
 */
const NotesView = () => {
  const [notes, setNotes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [noteColumns, setNoteColumns] = useState({});
  const [loadingColumns, setLoadingColumns] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
      const data = await NotesAPI.getAllNotes();
      setNotes(data);
    };
    const getStatuses = async () => {
      const data = await StatusesAPI.getAllNoteStatuses();
      setStatuses(data);
    };
    getNotes();
    getStatuses();
  }, []);

  useEffect(() => {
    const columns = {};
    statuses.forEach((status) => {
      columns[status.id] = {
        name: status.status,
        items: notes.filter((note) => note.status_id === status.id),
      };
    });
    console.log("Columns: ", columns);
    setNoteColumns(columns);
    setLoadingColumns(false);
  }, [notes, statuses]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Notes 📝
      </Typography>
      {loadingColumns ? (
        <LoadingSpinner label="notes" />
      ) : (
        <Board boardType="note" columns={noteColumns} />
      )}
    </Container>
  );
};

export default NotesView;
