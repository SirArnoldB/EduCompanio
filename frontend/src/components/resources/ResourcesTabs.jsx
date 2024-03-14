import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Organizations from "./Organizations";
import Skills from "./Skills";

const resourcesTabs = [
  {
    label: "Organizations",
    content: <Organizations />,
    icon: "",
  },
  {
    label: "Skills",
    content: <Skills />,
    icon: "",
  },
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

const ResourcesTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={resourcesTabs} />
    </Grid>
  );
};

export default ResourcesTabs;
