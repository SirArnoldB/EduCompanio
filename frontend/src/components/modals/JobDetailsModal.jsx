import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardHeader,
  Avatar,
  Chip,
  Modal,
  Box,
} from "@mui/material";
import { Icons8Jobs } from "../../assets/icons8";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PropTypes from "prop-types";

const JobDetailsModal = ({ open, handleClose, jobDetails }) => {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="job-details-modal"
        aria-describedby="job-details"
    >
        <Card
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4
        }}
        >
        <CardHeader
            avatar={<Avatar src={Icons8Jobs} aria-label="jobs" />}
            title="Job Details"
        />
        <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
            {jobDetails.title}
            </Typography>
            <Typography variant="body2" component="div" gutterBottom>
            {jobDetails.description}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Chip label={`Application Deadline: ${jobDetails.deadline}`} />
            </Box>
        </CardContent>
        <CardActions>
            <Button onClick={handleClose}>Close</Button>
            <Button
            href={jobDetails.link}
            target="_blank"
            startIcon={<OpenInNewIcon />}
            >
            Apply
            </Button>
        </CardActions>
        </Card>
    </Modal>
  );
};

JobDetailsModal.propTypes = {
  jobDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default JobDetailsModal;

