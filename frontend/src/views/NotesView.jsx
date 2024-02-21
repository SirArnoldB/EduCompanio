import { Card, Container, Typography } from "@mui/material";
import Board from "../components/board/Board";

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
      <Card sx={{ p: 3 }}>
        <Board boardType="note" />
      </Card>
    </Container>
  );
};

export default NotesView;
