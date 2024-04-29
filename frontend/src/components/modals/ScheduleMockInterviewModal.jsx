import {
  Button,
  IconButton,
  DialogContent,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { X as CloseIcon } from "lucide-react";
import InterviewCalendar from "../pitch/InterviewCaledar";

const ScheduleMockInterviewModal = ({ open, handleClose }) => {
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

  return (
    <StyledDialog onClose={handleClose} open={open} maxWidth>
      <StyledDialogTitle>
        Schedule Mock Interview
        <IconButton aria-label="close" onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <InterviewCalendar />
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          gap: 1,
          mr: 2,
        }}
      >
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

ScheduleMockInterviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleScheduleInterview: PropTypes.func.isRequired,
};

export default ScheduleMockInterviewModal;
