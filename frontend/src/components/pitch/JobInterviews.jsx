import { useState } from "react";
import { Box, Grid } from "@mui/material";
import PitchCard from "./PitchCard";
import PastPracticeSessions from "./PastPracticeSessions";
import ScheduleMockAIInterviewModal from "../modals/ScheduleMockAIInterviewModal";
import ScheduleMockInterviewModal from "../modals/ScheduleMockInterviewModal";

const JobInterviews = () => {
  const [openMockInterviewModal, setOpenMockInterviewModal] = useState(false);
  const [openMockAIInterviewModal, setOpenMockAIInterviewModal] =
    useState(false);

  const handleMockInterviewOpen = () => {
    setOpenMockInterviewModal(true);
  };

  const handleMockInterviewClose = () => {
    setOpenMockInterviewModal(false);
  };

  const handleMockAIInterviewOpen = () => {
    setOpenMockAIInterviewModal(true);
  };

  const handleMockAIInterviewClose = () => {
    setOpenMockAIInterviewModal(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="Peer & Professional Mock Interviews"
            subtitle="Practice your interview skills with peers or professionals."
            callToAction="Schedule a Practice Session"
            openModal={handleMockInterviewOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="Mock AI Interviews"
            subtitle="Experience simulated interviews powered by AI technology."
            callToAction="Start a Mock AI Interview"
            openModal={handleMockAIInterviewOpen}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <PastPracticeSessions />
      </Box>

      <ScheduleMockInterviewModal
        open={openMockInterviewModal}
        handleClose={handleMockInterviewClose}
      />

      <ScheduleMockAIInterviewModal
        open={openMockAIInterviewModal}
        handleClose={handleMockAIInterviewClose}
      />
    </>
  );
};

export default JobInterviews;
