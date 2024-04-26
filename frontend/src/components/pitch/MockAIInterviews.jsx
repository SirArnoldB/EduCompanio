import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ScheduleMockInterviewModal from "../modals/ScheduleMockAIInterviewModal";

const MockAIInterviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleInterview = (formData) => {
    // TODO: Implement logic to schedule a mock AI interview based on formData
    console.log("Schedule Mock AI Interview:", formData);
    // Close modal after scheduling the interview
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Mock AI Interviews
      </Typography>
      <Typography variant="body1" gutterBottom>
        Prepare for your interviews with mock AI interviews powered by advanced
        AI technology. Practice behavioral, technical, and case interviews, and
        receive personalized feedback and analysis.
      </Typography>
      <Button variant="contained" color="info" onClick={handleOpenModal}>
        New Mock AI Interview
      </Button>
      <ScheduleMockInterviewModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        handleScheduleInterview={handleScheduleInterview}
      />
    </Box>
  );
};

export default MockAIInterviews;
