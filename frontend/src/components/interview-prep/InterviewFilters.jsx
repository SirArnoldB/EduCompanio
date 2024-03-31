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

const InterviewFilters = ({ onFiltersChange, addNewEvent }) => {
  const [availability, setAvailability] = useState([]);
  const [interviewType, setInterviewType] = useState([]);
  const [peerRole, setPeerRole] = useState([]);

  const options = {
    availability: ["morning", "afternoon", "evening"],
    interviewType: ["technical", "behavioral", "case", "system design"],
    peerRole: ["interviewer/interviewee", "interviewer", "interviewee"],
  };

  const handleChange = (event, setFilter, option) => {
    const {
      target: { value },
    } = event;

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
      peerRole: option === "peerRole" ? updatedValue : peerRole,
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
          {/* Peer Role Select */}
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="peer-role-label">Peer Role</InputLabel>
            <Select
              labelId="peer-role-label"
              multiple
              value={peerRole}
              onChange={(event) => handleChange(event, setPeerRole, "peerRole")}
              size="small"
              label="Peer Role"
              renderValue={renderValue}
            >
              <MenuItem value="all">
                <Checkbox checked={peerRole.indexOf("all") > -1} />
                <ListItemText primary="All" />
              </MenuItem>
              {options.peerRole.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={peerRole.indexOf(option) > -1} />
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
          onClick={addNewEvent}
        >
          Add Availability
        </Button>
      </Box>
    </Box>
  );
};

InterviewFilters.propTypes = {
  onFiltersChange: Proptypes.func.isRequired,
  addNewEvent: Proptypes.func,
};

export default InterviewFilters;
