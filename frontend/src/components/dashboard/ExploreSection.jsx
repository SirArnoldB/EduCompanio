import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExploreJobs from "./ExploreJobs";
import ExploreProjects from "./ExploreProjects";
import ExploreEvents from "./ExploreEvents";
import JobsData from "../../data/recommended-jobs.json";
import ProjectsData from "../../data/recommended-projects.json";
import EventsData from "../../data/recommended-events.json";

const ExploreSection = ({ title }) => {
  return (
    <Box
      sx={{
        mb: 2.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="h7">{title}</Typography>
        <Button
          variant="text"
          size="small"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
        >
          View All
        </Button>
      </Box>
      <Box>
        {(() => {
          switch (title) {
            case "Jobs":
              return <ExploreJobs jobs={JobsData} />;
            case "Projects":
              return <ExploreProjects projects={ProjectsData} />;
            case "Events":
              return <ExploreEvents events={EventsData} />;
            default:
              return null;
          }
        })()}
      </Box>
    </Box>
  );
};

ExploreSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ExploreSection;
