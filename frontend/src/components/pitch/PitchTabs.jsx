import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import JobInterviews from "./JobInterviews";

const pitchTabs = [
  {
    label: "Job Interviews",
    content: <JobInterviews />,
    icon: "",
  },
  {
    label: "Business & Idea Pitches",
    content: <Typography>Business & Idea Pitches</Typography>,
    icon: "",
  },
  {
    label: "Personal Branding",
    content: <Typography>Personal Branding</Typography>,
    icon: "",
  },
];

const PitchTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={pitchTabs} />
    </Grid>
  );
};

export default PitchTabs;
