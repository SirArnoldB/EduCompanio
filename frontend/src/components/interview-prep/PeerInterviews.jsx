import { Box, Typography } from "@mui/material";
import PeerInterviewMatchingForm from "./PeerInterviewMatchingForm";

const PeerInterviews = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Peer Interviews
      </Typography>
      <Typography variant="body1" gutterBottom>
        Practice your interview skills with your peers. Find available
        interviewers and interviewees, and schedule mock interviews to get
        valuable feedback and experience.
      </Typography>
      <PeerInterviewMatchingForm />
    </Box>
  );
};

export default PeerInterviews;
