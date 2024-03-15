import { Box, Typography, Button } from "@mui/material";

const MockAIInterviews = () => {
  const handleScheduleInterview = () => {
    // TODO: (SirArnoldB) Implement logic to schedule a mock AI interview
    console.log("Schedule Mock AI Interview");
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleScheduleInterview}
      >
        Schedule Mock AI Interview
      </Button>
    </Box>
  );
};

export default MockAIInterviews;
