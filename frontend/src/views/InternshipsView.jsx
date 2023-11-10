import { Container, Typography } from "@mui/material";
import Board from "../components/Board";

/**
 * Renders the InternshipsView component.
 * @returns {JSX.Element} InternshipsView component UI.
 */
const InternshipsView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Internships 📌
      </Typography>
      <Board boardType="internship" />
    </Container>
  );
};

export default InternshipsView;
