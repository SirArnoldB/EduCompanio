import { Container, Typography } from "@mui/material";
import Board from "../components/Board";

/**
 * Renders a view for displaying notes.
 * @returns {JSX.Element}
 */
const NotesView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Notes 📝
      </Typography>
      <Board boardType="note" />
    </Container>
  );
};

export default NotesView;
