import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Board from "../board/Board";
import FindJobs from "./FindJobs";

const jobsTabs = [
  {
    label: "My Applications",
    content: <Board boardType="job" />,
    icon: "",
  },
  {
    label: "Community Opportunities",
    content: <FindJobs />,
    icon: "",
  },
];

const JobsTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={jobsTabs} />
    </Grid>
  );
};

export default JobsTabs;
