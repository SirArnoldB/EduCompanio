import { useState } from "react";
import { Container, Box } from "@mui/material";
import SearchBar from "../common/SearchBar";
import OrganizationsCard from "./OrganizationsCard";
import OrganizationsData from "../../data/organizations.json";

const Organizations = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (value) => {
    setSearchInput(value);
  };
  return (
    <Container maxWidth="xl">
      <SearchBar onSearch={handleSearchInput} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          mt: 2,
        }}
      >
        {OrganizationsData.map((organization, index) => (
          <OrganizationsCard key={index} organization={organization} />
        ))}
      </Box>
    </Container>
  );
};

export default Organizations;
