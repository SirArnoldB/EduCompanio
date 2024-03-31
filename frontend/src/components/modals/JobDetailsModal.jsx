import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { styled } from "@mui/system";
import { X as CloseIcon } from "lucide-react";
import Proptypes from "prop-types";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    paddingTop: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const JobDetailsModal = ({ open, handleClose, jobDetails }) => {
  return (
    <StyledDialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        Job Details
        <IconButton aria-label="close" onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom variant="h5" component="div">
          {jobDetails.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Company: {jobDetails.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {jobDetails.location}
        </Typography>
        <Box pt={2}>
          <Typography variant="body1">{jobDetails.description}</Typography>
        </Box>
        <Box mt={2} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Chip label={jobDetails.tag} color="primary" variant="outlined" />
          <Chip
            label={`Deadline: ${jobDetails.deadline}`}
            color="secondary"
            variant="outlined"
          />
        </Box>
      </DialogContent>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          gap: 2,
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="outlined"
          href={jobDetails.link}
          target="_blank"
          startIcon={<OpenInNewIcon />}
        >
          Apply
        </Button>
      </Box>
    </StyledDialog>
  );
};

JobDetailsModal.propTypes = {
  open: Proptypes.bool.isRequired,
  handleClose: Proptypes.func.isRequired,
  jobDetails: Proptypes.shape({
    title: Proptypes.string.isRequired,
    company: Proptypes.string.isRequired,
    location: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    tag: Proptypes.string.isRequired,
    deadline: Proptypes.string.isRequired,
    link: Proptypes.string.isRequired,
  }).isRequired,
};

export default JobDetailsModal;
