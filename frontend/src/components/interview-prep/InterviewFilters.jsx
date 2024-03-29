import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Iconify from "../common/Iconify";
import Proptypes from "prop-types";

const InterviewFilters = ({ onFiltersChange }) => {
  const [availability, setAvailability] = useState([]);
  const [interviewType, setInterviewType] = useState([]);
  const [interviewRole, setInterviewRole] = useState([]);

  const options = {
    availability: ["morning", "afternoon", "evening"],
    interviewType: ["technical", "behavioral", "case", "system design"],
    interviewRole: ["interviewer/interviewee", "interviewer", "interviewee"],
  };

  const handleChange = (event, setFilter, option) => {
    const {
      target: { value },
    } = event;

    console.log("value", value);

    // Check if 'all' option or all the options for given filter are selected
    const allOptionSelected =
      value.includes("all") ||
      options[option].every((val) => value.includes(val));

    const updatedValue = allOptionSelected ? ["all"] : value;
    setFilter(updatedValue);

    // Call the onFiltersChange callback with the updated filter values
    onFiltersChange({
      availability: option === "availability" ? updatedValue : availability,
      interviewType: option === "interviewType" ? updatedValue : interviewType,
      interviewRole: option === "interviewRole" ? updatedValue : interviewRole,
    });
  };

  const renderValue = (selected) =>
    selected.includes("all") ? "All" : selected.join(", ");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <ButtonGroup
          variant="contained"
          aria-label="filter button group"
          sx={{ p: 1 }}
        >
          {/* Availability Select */}
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="availability-label">Availability</InputLabel>
            <Select
              labelId="availability-label"
              multiple
              value={availability}
              onChange={(event) =>
                handleChange(event, setAvailability, "availability")
              }
              size="small"
              label="Availability"
              renderValue={renderValue}
            >
              <MenuItem value="all">
                <Checkbox checked={availability.indexOf("all") > -1} />
                <ListItemText primary="All" />
              </MenuItem>
              {options.availability.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={availability.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Interview Type Select */}
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="interview-type-label">Interview Type</InputLabel>
            <Select
              labelId="interview-type-label"
              multiple
              value={interviewType}
              onChange={(event) =>
                handleChange(event, setInterviewType, "interviewType")
              }
              size="small"
              label="Interview Type"
              renderValue={renderValue}
            >
              <MenuItem value="all">
                <Checkbox checked={interviewType.indexOf("all") > -1} />
                <ListItemText primary="All" />
              </MenuItem>
              {options.interviewType.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={interviewType.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Interview Role Select */}
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="interview-role-label">Role</InputLabel>
            <Select
              labelId="interview-role-label"
              multiple
              value={interviewRole}
              onChange={(event) =>
                handleChange(event, setInterviewRole, "interviewRole")
              }
              size="small"
              label="Interview Role"
              renderValue={renderValue}
            >
              <MenuItem value="all">
                <Checkbox checked={interviewRole.indexOf("all") > -1} />
                <ListItemText primary="All" />
              </MenuItem>
              {options.interviewRole.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={interviewRole.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ButtonGroup>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="info"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Availability
        </Button>
      </Box>
    </Box>
  );
};

InterviewFilters.propTypes = {
  onFiltersChange: Proptypes.func.isRequired,
};

export default InterviewFilters;
