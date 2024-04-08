import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import PeerInterviews from "./PeerInterviews";
import MockAIInterviews from "./MockAIInterviews";

const interviewPrepTabs = [
  {
    label: "Peer Interviews",
    content: <PeerInterviews />,
    icon: "",
  },
  {
    label: "Mock AI Interviews",
    content: <MockAIInterviews />,
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
