import { Box } from "@mui/material";
import CommunityProjectsData from "../../data/community-projects.json";
import CommunityProjectsCard from "../projects/CommunityProjectsCard";
import SearchBar from "../common/SearchBar";

const CommunityProjects = () => {
  const handleSearch = (searchInput) => {
    console.log(searchInput);
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        boardType="space"
        showAddButton={false}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        {/* TODO(@SirArnoldB): Rm Community projects data and community projects card. Add Spaces Data and Spaces Card */}

        {CommunityProjectsData.map((project, index) => (
          <CommunityProjectsCard key={index} project={project} />
        ))}
      </Box>
    </>
  );
};

export default CommunityProjects;
