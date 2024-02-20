import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import OrganizationsView from "../../views/OrganizationsView";
import SkillsView from "../../views/SkillsView";

const resourcesTabs = [
  {
    label: "Organizations",
    content: <OrganizationsView />,
    icon: "",
  },
  {
    label: "Skills",
    content: <SkillsView />,
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
