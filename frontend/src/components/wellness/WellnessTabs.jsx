import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";

const wellnessTabs = [
  {
    label: "Health",
    content: <Typography variant="h6">Health</Typography>,
    icon: "",
  },
  {
    label: "Finance",
    content: <Typography variant="h6">Finance</Typography>,
    icon: "",
  },
];

const WellnessTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={wellnessTabs} />
    </Grid>
  );
};

export default WellnessTabs;
