import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Iconify from "../common/Iconify";
import PropTypes from "prop-types";

const InterviewFilters = ({ onFiltersChange, addNewEvent }) => {
  const [interviewType, setInterviewType] = useState([]);
  const [interviewer, setInterviewer] = useState([]);

  const options = {
    interviewType: ["technical", "behavioral", "case", "system design"],
    interviewer: ["Peer", "Professional"],
  };

  const handleChange = (event, setFilter, option) => {
    const { value } = event.target;
    const allOptionSelected =
      value.includes("all") ||
      options[option].every((val) => value.includes(val));
    const updatedValue = allOptionSelected ? ["all"] : value;
    setFilter(updatedValue);
    onFiltersChange({
      interviewType: option === "interviewType" ? updatedValue : interviewType,
      interviewer: option === "interviewer" ? updatedValue : interviewer,
    });
  };

  const renderValue = (selected) =>
    selected.includes("all") ? "All" : selected.join(", ");

  const renderSelectFilter = (label, value, onChange, menuItems) => (
    <FormControl variant="filled" fullWidth margin="normal">
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        multiple
        value={value}
        onChange={onChange}
        size="small"
        label={label}
        renderValue={renderValue}
      >
        <MenuItem value="all">
          <Checkbox checked={value.indexOf("all") > -1} />
          <ListItemText primary="All" />
        </MenuItem>
        {menuItems.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={value.indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

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
      <Card sx={{ flexGrow: 1 }}>
        <CardContent sx={{ display: "flex", gap: 2 }}>
          {renderSelectFilter(
            "Interview Type",
            interviewType,
            (event) => handleChange(event, setInterviewType, "interviewType"),
            options.interviewType
          )}
          {renderSelectFilter(
            "Interviewer",
            interviewer,
            (event) => handleChange(event, setInterviewer, "interviewer"),
            options.interviewer
          )}
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="info"
        startIcon={<Iconify icon="eva:plus-fill" />}
        onClick={addNewEvent}
      >
        Add Availability
      </Button>
    </Box>
  );
};

InterviewFilters.propTypes = {
  onFiltersChange: PropTypes.func.isRequired,
  addNewEvent: PropTypes.func,
};

export default InterviewFilters;
