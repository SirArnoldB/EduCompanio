import { Container, Typography } from "@mui/material";
import ProjectsTabs from "../components/projects/ProjectsTabs";

/**
 * Renders the ProjectsView component.
 * @returns {JSX.Element} The ProjectsView component.
 */
const ProjectsView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Projects 🎯
      </Typography>
      <ProjectsTabs />
    </Container>
  );
};

export default ProjectsView;
