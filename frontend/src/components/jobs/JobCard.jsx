import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardHeader,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { Icons8Jobs } from "../../assets/icons8";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import JobDetailsModal from "../modals/JobDetailsModal";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 345,
          borderStyle: "dashed",
          backgroundColor: (theme) => theme.palette.grey[100],
          borderRadius: 2,
          boxShadow: 2,
          ml: 1,
        }}
      >
        <CardHeader
          avatar={<Avatar src={Icons8Jobs} aria-label="jobs" />}
          title={job.title}
          subheader={`${job.company} | ${job.location}`}
          action={
            <Chip label={`${job.tag}`} color="primary" variant="outlined" />
          }
        />
        <CardContent
          sx={{
            mt: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {job.description.length > 100
              ? `${job.description.slice(0, 100)}...`
              : job.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: 2,
            }}
          >
            <Chip label={`Application Deadline: ${job.deadline}`} />
          </Box>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: 1,
            ml: 1,
            mb: 1,
          }}
        >
          <Button
            href={job.link}
            target="_blank"
            variant="outlined"
            color="primary"
            startIcon={<OpenInNewIcon />}
          >
            Apply
          </Button>
          <Button variant="outlined" color="primary" onClick={handleOpen}>
             Details
          </Button>
          <JobDetailsModal
            open={open}
            handleClose={handleClose}
            jobDetails={job}
          />
        </CardActions>
      </Card>
    </>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    logo_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
