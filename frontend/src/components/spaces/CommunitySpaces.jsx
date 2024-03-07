import { Box } from "@mui/material";
import SpacesData from "../../data/spaces.json";
import SearchBar from "../common/SearchBar";
import SpacesCard from "./SpacesCard";

const CommunitySpaces = () => {
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
        {SpacesData.spaces.map((space, index) => (
          <SpacesCard key={index} space={space} />
        ))}
      </Box>
    </>
  );
};

export default CommunitySpaces;
