import { Container, Typography } from "@mui/material";
import InternshipsTabs from "../components/internships/InternshipsTabs";

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
      <InternshipsTabs />
    </Container>
  );
};

export default InternshipsView;
