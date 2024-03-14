import { Container, Typography } from "@mui/material";
import InterviewPrepTabs from "../components/interview-prep/InterviewPrepTabs";

const InterviewPrepView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Interview Prep 🎯
      </Typography>
      <InterviewPrepTabs />
    </Container>
  );
};

export default InterviewPrepView;
