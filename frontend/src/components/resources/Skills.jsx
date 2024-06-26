import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchBar from "../common/SearchBar";
import SkillsResources from "../../data/skills-resources.json";
import ResourcesCard from "./ResourcesCard";
import FilterButtonGroup from "../common/FilterButtonGroup";
import { Icons8Skills } from "../../assets/icons8";

const Skills = () => {
  const [skills, setSkills] = useState(SkillsResources);
  const [searchInput, setSearchInput] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    const filteredSkills = SkillsResources.filter((skill) => {
      if (currentFilter === "All") {
        return skill;
      } else {
        return skill.tags.includes(currentFilter.toLowerCase());
      }
    });

    setSkills(
      filteredSkills.filter((skill) =>
        skill.title.toLowerCase().includes(searchInput.toLowerCase())
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
        boardType="skill resource"
      />
      <FilterButtonGroup
        filters={[
          { value: "All", active: true },
          { value: "Beginner", active: false },
          { value: "Intermediate", active: false },
          { value: "Expert", active: false },
          { value: "Interview Prep", active: false },
          { value: "Career Roadmap", active: false },
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
        {skills.map((resource, index) => (
          <ResourcesCard
            key={index}
            resource={resource}
            resourceIcon={Icons8Skills}
          />
        ))}
      </Box>
    </>
  );
};

export default Skills;
