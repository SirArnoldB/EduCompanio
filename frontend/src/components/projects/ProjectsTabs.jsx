import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Board from "../board/Board";
import OrganizationsView from "../../views/OrganizationsView";
import CommunityProjects from "./CommunityProjects";


const projectsTabs = [
  {
    label: "My Projects",
    content: <Board boardType="project" />,
    icon: "",
  },
  {
    label: "Community Projects",
    content: <CommunityProjects/>,
    icon: "",

  },

];

const ProjectsTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={projectsTabs} />
    </Grid>
  );
};

export default ProjectsTabs;
