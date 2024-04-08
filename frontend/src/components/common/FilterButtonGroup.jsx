import { Button, ButtonGroup } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const FilterButtonGroup = ({ filters, setCurrentFilter }) => {
  const [newFilters, setNewFilters] = useState(filters);

  const handleFilterChange = (filter) => {
    const updatedFilters = newFilters.map((f) => {
      if (f.value === filter.value) {
        setCurrentFilter(f.value);
        return { ...f, active: true };
      } else {
        return { ...f, active: false };
      }
    });

    setNewFilters(updatedFilters);
  };

  return (
    <ButtonGroup
      sx={{
        padding: "10px",
      }}
    >
      {newFilters.map((filter, index) => (
        <Button
          key={index}
          onClick={() => handleFilterChange(filter)}
          sx={{
            backgroundColor: filter.active ? "#1877F2" : "",
            color: filter.active ? "#ffffff" : "",
            "&:hover": {
              backgroundColor: filter.active ? "#1877F2" : "#E7F3FF",
              color: filter.active ? "#ffffff" : "#1877F2",
            },
          }}
        >
          {filter.value}
        </Button>
      ))}
    </ButtonGroup>
  );
};

FilterButtonGroup.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setCurrentFilter: PropTypes.func,
};

export default FilterButtonGroup;
