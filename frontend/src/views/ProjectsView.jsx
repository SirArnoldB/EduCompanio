import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Board from "../components/Board";
import ProjectAPI from "../services/projects";
import StatusesAPI from "../services/statuses";
import LoadingSpinner from "../components/LoadingSpinner";

/**
 * Renders the ProjectsView component.
 * @returns {JSX.Element} The ProjectsView component.
 */
const ProjectsView = () => {
  const [projects, setProjects] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [projectColumns, setProjectColumns] = useState({});
  const [loadingColumns, setLoadingColumns] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const data = await ProjectAPI.getAllProjects();
      setProjects(data);
    };
    const getStatuses = async () => {
      const data = await StatusesAPI.getAllProjectStatuses();
      setStatuses(data);
    };
    getProjects();
    getStatuses();
  }, []);

  useEffect(() => {
    const columns = {};
    statuses.forEach((status) => {
      columns[status.id] = {
        name: status.status,
        items: projects.filter((project) => project.status_id === status.id),
      };
    });
    console.log("Columns: ", columns);
    setProjectColumns(columns);
    setLoadingColumns(false);
  }, [projects, statuses]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Projects 🎯
      </Typography>
      {loadingColumns ? (
        <LoadingSpinner label="projects" />
      ) : (
        <Board boardType="project" columns={projectColumns} />
      )}
    </Container>
  );
};

export default ProjectsView;
