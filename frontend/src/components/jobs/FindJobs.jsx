import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import JobCard from "./JobCard";
import SearchBar from "../common/SearchBar";
import CommunityOpportunitiesData from "../../data/community-opportunities.json";
import FilterButtonGroup from "../common/FilterButtonGroup";

const FindJobs = () => {
  const [jobs, setJobs] = useState(CommunityOpportunitiesData);
  const [searchInput, setSearchInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    const filteredJobs = CommunityOpportunitiesData.filter((job) => {
      if (currentFilter === "All") {
        return job;
      } else {
        return job.tag.toLowerCase() === currentFilter.toLowerCase();
      }
    });

    setJobs(
      filteredJobs.filter((job) =>
        job.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, currentFilter]);

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  return (
    <>
      <SearchBar onSearch={handleSearchInput} />
      <FilterButtonGroup
        filters={[
          { value: "All", active: true },
          { value: "Full Time", active: false },
          { value: "Part Time", active: false },
          { value: "Contract", active: false },
          { value: "Internship", active: false },
          { value: "Volunteer", active: false },
        ]}
        setCurrentFilter={setCurrentFilter}
      />
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
            mt: 2,
          }}
        >
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FindJobs;
