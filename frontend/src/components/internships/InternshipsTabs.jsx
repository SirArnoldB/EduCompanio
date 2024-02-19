import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Board from "../board/Board";

const internshipsTabs = [
  {
    label: "My Internships",
    content: <Board boardType="internship" />,
    icon: "",
  },
  {
    label: "Community Opportunities",
    content: <Typography variant="h6">Community Opportunities</Typography>,
    icon: "",
  },
];

const InternshipsTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={internshipsTabs} />
    </Grid>
  );
};

export default InternshipsTabs;
