import { Container, Typography } from "@mui/material";
import ResourcesTabs from "../components/resources/ResourcesTabs";

const ResourcesView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Resources 🎯
      </Typography>

      <ResourcesTabs />
    </Container>
  );
};

export default ResourcesView;
