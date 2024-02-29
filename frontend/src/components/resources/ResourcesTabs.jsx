import { Grid } from "@mui/material";
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
];

const ResourcesTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={resourcesTabs} />
    </Grid>
  );
};

export default ResourcesTabs;
