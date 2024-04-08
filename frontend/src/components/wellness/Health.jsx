// import { useState } from "react";
// import { Container, Box } from "@mui/material";
// import SearchBar from "../common/SearchBar";
// import HealthCard from "./HealthCard";
// import HealthData from "../../data/Health.json";

// const Organizations = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const handleSearchInput = (value) => {
//     setSearchInput(value);
//   };
//   return (
//     <Container maxWidth="xl">
//       <SearchBar onSearch={handleSearchInput} />
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//           gap: 2,
//           mt: 2,
//         }}
//       >
//         {HealthData.map((organization, index) => (
//           <healthCard key={index} organization={organization} />
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default Health;

import { useState } from "react";
import { Container, Box } from "@mui/material";
import SearchBar from "../common/SearchBar";
import HealthCard from "./HealthCard";
import HealthData from "../../data/Health.json";

const Health = () => {
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
        {HealthData.map((organization, index) => (
          <HealthCard key={index} organization={organization} />
        ))}
      </Box>
    </Container>
  );
};

export default Health;
