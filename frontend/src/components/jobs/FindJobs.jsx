import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import JobCard from "./JobCard";
import SearchBar from "../common/SearchBar";
import CommunityOpportunitiesData from "../../data/community-opportunities.json";

const FindJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  return (
    <>
      <SearchBar onSearch={handleSearchInput} />
      <ButtonGroup
        sx={{
          padding: "10px",
        }}
      >
        <Button
          className={filter === "All" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("All")}
        >
          All
        </Button>
        <Button
          className={filter === "beginner" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("beginner")}
        >
          Beginner
        </Button>
        <Button
          className={filter === "expert" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("expert")}
        >
          Intermediate
        </Button>
        <Button
          className={filter === "intermediate" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("intermediate")}
        >
          Expert
        </Button>
      </ButtonGroup>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
            mt: 2,
          }}
        >
          {CommunityOpportunitiesData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FindJobs;
