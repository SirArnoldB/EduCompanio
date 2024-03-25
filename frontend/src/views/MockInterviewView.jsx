import { Typography, Container, Box } from "@mui/material";
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
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
        }}
      >
        <Typography variant="h4">Mock AI Interview with EduChamp</Typography>
      </Box>
      <InteractivePanelGroup />
    </Container>
  );
};

export default MockInterviewView;
