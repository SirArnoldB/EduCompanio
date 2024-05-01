import React, { useMemo, useState } from "react";
import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import timezone from "dayjs/plugin/timezone";

import "react-big-calendar/lib/css/react-big-calendar.css";
import InterviewFilters from "./InterviewFilters";
import AddPeerInterviewEvent from "../modals/AddPeerInterviewEvent";
import ViewPeerInterviewEvent from "../modals/ViewPeerInterviewEvent";

dayjs.extend(timezone);
const djLocalizer = dayjsLocalizer(dayjs);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const InterviewCalendar = () => {
  const [events, setEvents] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState(["all"]);
  const [interviewTypeFilter, setInterviewTypeFilter] = useState(["all"]);
  const [peerRoleFilter, setPeerRoleFilter] = useState(["all"]);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [viewEventOpen, setViewEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEventOpen = () => {
    setAddEventOpen(true);
  };

  const handleAddEventClose = () => {
    setAddEventOpen(false);
  };

  const handleViewEventOpen = (event) => {
    setSelectedEvent(event);
    setViewEventOpen(true);
  };

  const handleViewEventClose = () => {
    setViewEventOpen(false);
    setSelectedEvent(null);
  };

  // Generate dummy events
  useMemo(() => {
    const generateDummyEvents = () => {
      const dummyEvents = [];
      const availabilityOptions = [
        "available",
        "interviewer_available",
        "interviewee_available",
        "booked",
      ];
      const interviewTypes = [
        "technical",
        "behavioral",
        "case",
        "system design",
      ];
      const peerRoles = [
        "interviewer/interviewee",
        "interviewer",
        "interviewee",
      ];

      for (let i = 0; i < 20; i++) {
        const startDate = dayjs().add(i, "day").startOf("day").add(9, "hour");
        const endDate = dayjs(startDate).add(1, "hour");
        const availability =
          availabilityOptions[
            Math.floor(Math.random() * availabilityOptions.length)
          ];
        const interviewType =
          interviewTypes[Math.floor(Math.random() * interviewTypes.length)];
        const peerRole =
          peerRoles[Math.floor(Math.random() * peerRoles.length)];
        const interviewer = {
          name: `Interviewer ${i + 1}`,
          email: `interviewer${i + 1}@example.com`,
        };
        const interviewee = {
          name: `Interviewee ${i + 1}`,
          email: `interviewee${i + 1}@example.com`,
        };
        const notes = `Notes for event ${i + 1}`;
        const location = `Location ${i + 1}`;
        const reminder = dayjs(startDate).subtract(1, "day").toDate();

        dummyEvents.push({
          id: `event-${i + 1}`,
          title: `${availability} ${interviewType} Interview (${peerRole})`,
          start: startDate.toDate(),
          end: endDate.toDate(),
          availability,
          interviewType,
          peerRole,
          interviewer,
          interviewee,
          notes,
          location,
          reminder,
        });
      }

      setEvents(dummyEvents);
    };

    generateDummyEvents();
  }, []);

  const handleFiltersChange = (filters) => {
    setAvailabilityFilter(
      filters.availability?.includes("all")
        ? ["all"]
        : filters.availability || ["all"]
    );
    setInterviewTypeFilter(
      filters.interviewType?.includes("all")
        ? ["all"]
        : filters.interviewType || ["all"]
    );
    setPeerRoleFilter(
      filters.peerRole?.includes("all") ? ["all"] : filters.peerRole || ["all"]
    );
  };

  // Filter events based on selected filters
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const { availability, interviewType, peerRole } = event;

      if (
        (availabilityFilter.length > 0 &&
          !availabilityFilter.includes("all") &&
          !availabilityFilter.includes(availability)) ||
        (interviewTypeFilter.length > 0 &&
          !interviewTypeFilter.includes("all") &&
          !interviewTypeFilter.includes(interviewType)) ||
        (peerRoleFilter.length > 0 &&
          !peerRoleFilter.includes("all") &&
          !peerRoleFilter.includes(peerRole))
      ) {
        return false;
      }

      return true;
    });
  }, [events, availabilityFilter, interviewTypeFilter, peerRoleFilter]);

  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
      max: dayjs().endOf("day").subtract(1, "hours").toDate(),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  );

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InterviewFilters
          onFiltersChange={handleFiltersChange}
          addNewEvent={handleAddEventOpen}
        />
        <Box
          sx={{
            mt: 2,
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 1,
            p: 2,
            flexGrow: 1,
          }}
        >
          <Calendar
            components={components}
            defaultDate={defaultDate}
            defaultView={Views.WEEK}
            events={filteredEvents}
            localizer={djLocalizer}
            max={max}
            showMultiDayTimes
            step={60}
            views={views}
            startAccessor={"start"}
            endAccessor={"end"}
            onSelectSlot={handleAddEventOpen}
            onSelectEvent={handleViewEventOpen}
            selectable
            style={{ minHeight: 600 }}
          />
        </Box>
      </Box>
      <AddPeerInterviewEvent
        open={addEventOpen}
        onClose={handleAddEventClose}
      />
      <ViewPeerInterviewEvent
        open={viewEventOpen}
        onClose={handleViewEventClose}
        event={selectedEvent}
      />
    </>
  );
};

export default InterviewCalendar;
