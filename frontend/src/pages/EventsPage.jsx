import { Helmet } from "react-helmet-async";
import EventsView from "../views/EventsView";

const EventsPage = () => {
  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <EventsView />
    </>
  );
};

export default EventsPage;
