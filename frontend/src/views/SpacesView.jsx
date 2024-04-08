import { Container, Typography } from "@mui/material";
import SpacesTabs from "../components/spaces/SpacesTabs";

/**
 * Renders the SpacesView component.
 * @returns {JSX.Element} The SpacesView component.
 */
const SpacesView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Spaces 🌌
      </Typography>
      <SpacesTabs />
    </Container>
  );
};

export default SpacesView;
