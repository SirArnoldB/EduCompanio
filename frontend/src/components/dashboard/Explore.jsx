import { Box, Card, CardHeader } from "@mui/material";
import PropTypes from "prop-types";
import ExploreSection from "./ExploreSection";

const Explore = ({ title, subheader, ...other }) => {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box
        sx={{
          p: 3,
        }}
      >
        <ExploreSection title="Jobs" />
        <ExploreSection title="Projects" />
        <ExploreSection title="Events" />
      </Box>
    </Card>
  );
};

Explore.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default Explore;
