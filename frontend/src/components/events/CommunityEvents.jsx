import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CommunityEventsData from "../../data/community-events.json";
import SearchBar from "../common/SearchBar";
import CommunityEventsCard from "./CommunityEventsCard";
import FilterButtonGroup from "../common/FilterButtonGroup";

const CommunityEvents = () => {
  const [events, setEvents] = useState(CommunityEventsData);
  const [searchInput, setSearchInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    const filteredEvents = CommunityEventsData.filter((event) => {
      if (currentFilter === "All") {
        return event;
      } else {
        return event.tag.toLowerCase() === currentFilter.toLowerCase();
      }
    });

    setEvents(
      filteredEvents.filter((event) =>
        event.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, currentFilter]);

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  const handleAdd = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearchInput}
        setAddModalOpen={handleAdd}
        boardType="event"
      />
      <FilterButtonGroup
        filters={[
          { value: "All", active: true },
          { value: "In-Person", active: false },
          { value: "Virtual", active: false },
          { value: "Campus", active: false },
        ]}
        setCurrentFilter={setCurrentFilter}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        {events.map((event, index) => (
          <CommunityEventsCard key={index} event={event} />
        ))}
      </Box>
    </>
  );
};

export default CommunityEvents;
