import { Container, Typography } from "@mui/material";
import Board from "../components/Board";

const NotesView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Notes 📝
      </Typography>
      <Board boardType="notes" />
    </Container>
  );
};

export default NotesView;
