import { Container, Typography } from "@mui/material";
import EventsTabs from "../components/events/Eventstabs";

/**
 * Renders a view for displaying events.
 * @returns {JSX.Element}
 */
const EventsView = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Events 📅
      </Typography>
      <EventsTabs />
    </Container>
  );
};

export default EventsView;
