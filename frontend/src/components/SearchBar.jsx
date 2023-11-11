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

const SearchBar = ({ onSearch }) => {
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
        >
          Add
        </Button>
      </Stack>
    </Paper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
