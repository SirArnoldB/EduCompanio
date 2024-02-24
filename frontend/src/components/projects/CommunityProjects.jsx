import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import "../../css/Skills.css";
import CommunityProjectsData from "../../data/community-projects.json";
import CommunityProjectsCard from "./CommunityProjectsCard";
import SearchBar from "../common/SearchBar";

const CommunityProjects = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearch = (searchInput) => {
    console.log(searchInput);
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        {CommunityProjectsData.map((project, index) => (
          <CommunityProjectsCard key={index} project={project} />
        ))}
      </Box>
    </>
  );
};

export default CommunityProjects;
