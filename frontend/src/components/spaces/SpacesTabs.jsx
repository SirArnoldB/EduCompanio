import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import CommunitySpaces from "./CommunitySpaces";

const spacesTabs = [
  {
    label: "Community Spaces",
    content: <CommunitySpaces />,
    icon: "",
  },
];

const SpacesTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={spacesTabs} />
    </Grid>
  );
};

export default SpacesTabs;
