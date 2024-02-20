import { Container, Typography } from "@mui/material";
import JobsTabs from "../components/jobs/JobsTabs";

/**
 * Renders the JobsView component.
 * @returns {JSX.Element} JobsView component UI.
 */
const JobsView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Jobs 📌
      </Typography>
      <JobsTabs />
    </Container>
  );
};

export default JobsView;
