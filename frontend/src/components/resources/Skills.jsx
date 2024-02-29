import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import SearchBar from "../common/SearchBar";
import SkillsResources from "../../data/skills-resources.json";
import SkillsCard from "./SkillsCard";
import "../../css/Skills.css";

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const filteredResources = SkillsResources.filter((resource) => {
    switch (filter) {
      case "All":
        return true;
      default:
        return resource.tags.includes(filter.toLocaleLowerCase());
    }
  });

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
        boardType="skill"
      />
      <ButtonGroup
        sx={{
          p: "10px",
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
          Expert
        </Button>
        <Button
          className={filter === "intermediate" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("intermediate")}
        >
          Intermediate
        </Button>
        <Button
          className={filter === "interview prep" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("interview prep")}
        >
          Interview Prep
        </Button>
        <Button
          className={filter === "career roadmap" ? "activeBtn" : ""}
          onClick={() => handleFilterChange("career roadmap")}
        >
          Career Roadmap
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
        {filteredResources.map((resource, index) => (
          <SkillsCard key={index} skill={resource} />
        ))}
      </Box>
    </>
  );
};

export default Skills;
