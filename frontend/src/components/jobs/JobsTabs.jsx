import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Board from "../board/Board";

const jobsTabs = [
  {
    label: "My Applications",
    content: <Board boardType="internship" />,
    icon: "",
  },
  {
    label: "Community Opportunities",
    content: <Typography variant="h6">Community Opportunities</Typography>,
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
