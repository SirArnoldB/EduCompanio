import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../common/SearchBar";
import HealthResourcesData from "../../data/health-resources.json";
import ResourcesCard from "./ResourcesCard";
import FilterButtonGroup from "../common/FilterButtonGroup";
import { Icons8Calm } from "../../assets/icons8";

const HealthResources = () => {
  const [healthData, setHealthData] = useState(HealthResourcesData);
  const [searchInput, setSearchInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    const filteredHealthData = HealthResourcesData.filter((resource) => {
      if (currentFilter === "All") {
        return resource;
      } else {
        return resource.tags.includes(currentFilter.toLowerCase());
      }
    });

    setHealthData(
      filteredHealthData.filter((resource) =>
        resource.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, currentFilter]);

  const handleSearch = (searchInput) => {
    setSearchInput(searchInput);
  };

  const handleAdd = () => {
    console.log("Add button clicked");
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        setAddModalOpen={handleAdd}
        boardType="health resource"
      />
      <FilterButtonGroup
        filters={[
          { value: "All", active: true },
          { value: "Mental Health", active: false },
          { value: "Physical Health", active: false },
          { value: "Wellness", active: false },
          { value: "Education", active: false },
          { value: "Support", active: false },
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
        {healthData.map((resource, index) => (
          <ResourcesCard
            key={index}
            resource={resource}
            resourceIcon={Icons8Calm}
          />
        ))}
      </Box>
    </>
  );
};

export default HealthResources;
