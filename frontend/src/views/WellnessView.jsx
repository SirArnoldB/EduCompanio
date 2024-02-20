import { Container, Typography } from "@mui/material";
import WellnessTabs from "../components/wellness/WellnessTabs";

/**
 * Renders a view for displaying notes.
 * @returns {JSX.Element}
 */
const WellnessView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Wellness 🧘
      </Typography>
      <WellnessTabs />
    </Container>
  );
};

export default WellnessView;
