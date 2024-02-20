import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import Board from "../board/Board";

const projectsTabs = [
  {
    label: "My Projects",
    content: <Board boardType="project" />,
    icon: "",
  },
  {
    label: "Community Projects",
    content: <Typography variant="h6">Community Projects</Typography>,
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
