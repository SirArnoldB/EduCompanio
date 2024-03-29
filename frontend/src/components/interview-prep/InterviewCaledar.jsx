import React, { useMemo, useState } from "react";
import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import timezone from "dayjs/plugin/timezone";

import "react-big-calendar/lib/css/react-big-calendar.css";
import InterviewFilters from "./InterviewFilters";

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
  const [interviewRoleFilter, setInterviewRoleFilter] = useState(["all"]);

  // Generate dummy events
  useMemo(() => {
    const generateDummyEvents = () => {
      const dummyEvents = [];
      const availabilityOptions = ["morning", "afternoon", "evening"];
      const interviewTypes = [
        "technical",
        "behavioral",
        "case",
        "system design",
      ];
      const interviewRoles = [
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
        const interviewRole =
          interviewRoles[Math.floor(Math.random() * interviewRoles.length)];

        dummyEvents.push({
          start: startDate.toDate(),
          end: endDate.toDate(),
          title: `${availability} ${interviewType} Interview (${interviewRole})`,
          availability,
          interviewType,
          interviewRole,
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
    setInterviewRoleFilter(
      filters.interviewRole?.includes("all")
        ? ["all"]
        : filters.interviewRole || ["all"]
    );
  };

  // Filter events based on selected filters
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const { availability, interviewType, interviewRole } = event;

      if (
        (availabilityFilter.length > 0 &&
          !availabilityFilter.includes("all") &&
          !availabilityFilter.includes(availability)) ||
        (interviewTypeFilter.length > 0 &&
          !interviewTypeFilter.includes("all") &&
          !interviewTypeFilter.includes(interviewType)) ||
        (interviewRoleFilter.length > 0 &&
          !interviewRoleFilter.includes("all") &&
          !interviewRoleFilter.includes(interviewRole))
      ) {
        return false;
      }

      return true;
    });
  }, [events, availabilityFilter, interviewTypeFilter, interviewRoleFilter]);

  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2024, 1, 1),
      max: dayjs().endOf("day").subtract(1, "hours").toDate(),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <InterviewFilters onFiltersChange={handleFiltersChange} />
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
          events={filteredEvents}
          localizer={djLocalizer}
          max={max}
          showMultiDayTimes
          step={60}
          views={views}
          startAccessor={"start"}
          endAccessor={"end"}
          style={{ minHeight: 600 }}
        />
      </Box>
    </Box>
  );
};

export default InterviewCalendar;
