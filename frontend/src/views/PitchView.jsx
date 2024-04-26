import { Container, Typography } from "@mui/material";
import PitchTabs from "../components/pitch/PitchTabs";

const PitchView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Pitch 🎯
      </Typography>
      <PitchTabs />
    </Container>
  );
};

export default PitchView;
