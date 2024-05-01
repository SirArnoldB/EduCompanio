import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import JobInterviews from "./JobInterviews";
import IdeaPitches from "./IdeaPitches";
import PersonalBranding from "./PersonalBranding";

const pitchTabs = [
  {
    label: "Job Interviews",
    content: <JobInterviews />,
    icon: "",
  },
  {
    label: "Business & Idea Pitches",
    content: <IdeaPitches />,
    icon: "",
  },
  {
    label: "Personal Branding",
    content: <PersonalBranding />,
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
