import { Grid, Typography } from "@mui/material";
import TabsSection from "../tabs/TabsSection";

const eventsTabs = [
  {
    label: "My Events",
    content: <Typography variant="h6">My Events</Typography>,
    icon: "",
  },
  {
    label: "Community Events",
    content: <Typography variant="h6">Community Events</Typography>,
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
