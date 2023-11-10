import { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import Iconify from "./Iconify";
import PropTypes from "prop-types";

/**
 * A search bar component that allows users to search and add items.
 * @param {Object} props - The props object.
 * @param {Function} props.onSearch - The function to call when the search input changes.
 * @param {Function} props.setAddModalOpen - The function to call when the add button is clicked.
 * @returns {JSX.Element} - The SearchBar component.
 */
const SearchBar = ({ onSearch, setAddModalOpen }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Paper
      sx={{
        padding: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <OutlinedInput
          sx={{
            width: "50%",
            ml: 1,
          }}
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <Iconify icon="mdi:magnify" />
            </InputAdornment>
          }
        />
        <Button
          variant="contained"
          color="info"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => setAddModalOpen(true)}
        >
          Add
        </Button>
      </Stack>
    </Paper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  setAddModalOpen: PropTypes.func.isRequired,
};

export default SearchBar;
