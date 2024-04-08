import { Grid } from "@mui/material";
import TabsSection from "../tabs/TabsSection";
import CommunityEvents from "./CommunityEvents";
import MyEvents from "./MyEvents";

const eventsTabs = [
  {
    label: "My Events",
    content: <MyEvents />,
    icon: "",
  },
  {
    label: "Community Events",
    content: <CommunityEvents />,
    icon: "",
  },
];

const EventsTabs = () => {
  return (
    <Grid item xs={12}>
      <TabsSection tabs={eventsTabs} />
    </Grid>
  );
};

export default EventsTabs;
