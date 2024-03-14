import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";

const interviewPrepTabs = [
  {
    label: "Peer Interviews",
    content: <Typography variant="h6">Peer Interviews</Typography>,
    icon: "",
  },
  {
    label: "Mock AI Interviews",
    content: <Typography variant="h6">Mock AI Interviews</Typography>,
    icon: "",
  },
];

const InterviewPrepTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={interviewPrepTabs} />
    </Grid>
  );
};

export default InterviewPrepTabs;
