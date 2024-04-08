import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CommunityProjectsData from "../../data/community-projects.json";
import CommunityProjectsCard from "./CommunityProjectsCard";
import SearchBar from "../common/SearchBar";
import FilterButtonGroup from "../common/FilterButtonGroup";

const CommunityProjects = () => {
  const [projects, setProjects] = useState(CommunityProjectsData);
  const [searchInput, setSearchInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    const filteredProjects = CommunityProjectsData.filter((project) => {
      if (currentFilter === "All") {
        return project;
      } else {
        return project.tags.includes(currentFilter.toLowerCase());
      }
    });

    setProjects(
      filteredProjects.filter((project) =>
        project.title.toLowerCase().includes(searchInput.toLowerCase())
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
        boardType="project"
      />
      <FilterButtonGroup
        filters={[
          { value: "All", active: true },
          { value: "Beginner", active: false },
          { value: "Intermediate", active: false },
          { value: "Expert", active: false },
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
        {projects.map((project, index) => (
          <CommunityProjectsCard key={index} project={project} />
        ))}
      </Box>
    </>
  );
};

export default CommunityProjects;
