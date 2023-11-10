import { Container, Typography } from "@mui/material";
import Board from "../components/Board";

const InternshipsView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Internships 📌
      </Typography>
      <Board boardType="internships" />
    </Container>
  );
};

export default InternshipsView;
