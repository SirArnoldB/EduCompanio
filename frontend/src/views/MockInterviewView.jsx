import { Typography, Container } from "@mui/material";
import InteractivePanelGroup from "../components/common/InteractivePanelGroup";

const MockInterviewView = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant="h5">Mock AI Interview with EduChamp</Typography>
      <InteractivePanelGroup />
    </Container>
  );
};

export default MockInterviewView;
