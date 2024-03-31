import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";
import RouterLink from "../common/RouterLink";

const ScheduleMockInterviewModal = ({
  open,
  handleClose,
  handleScheduleInterview,
}) => {
  const [formData, setFormData] = useState({
    interviewType: "",
    company: "",
    level: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (!formData.interviewType || !formData.company || !formData.level) {
      // Alert user to fill all fields
      alert("Please fill all fields");
    } else {
      handleScheduleInterview(formData);
    }
  };

  const companies = [
    "Google",
    "Amazon",
    "Facebook",
    "Microsoft",
    "Apple",
    "Other",
  ];

  const levels = [
    "Freshman",
    "Sophomore",
    "SWE",
    "Junior",
    "Entry Level/New Grad",
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Schedule Mock AI Interview
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel id="interview-type-label">Interview Type</InputLabel>
            <Select
              labelId="interview-type-label"
              name="interviewType"
              value={formData.interviewType}
              onChange={handleChange}
            >
              <MenuItem value="behavioral">Behavioral</MenuItem>
              <MenuItem value="case">Case</MenuItem>
              <MenuItem value="system-design">System Design</MenuItem>
              <MenuItem value="technical">Technical</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel id="company-label">Company</InputLabel>
            <Select
              labelId="company-label"
              name="company"
              value={formData.company}
              onChange={handleChange}
            >
              {companies.map((company) => (
                <MenuItem key={company} value={company}>
                  {company}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel id="level-label">Level</InputLabel>
            <Select
              labelId="level-label"
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              {levels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button onClick={handleClose}>Cancel</Button>
            <RouterLink href="/mock-interview">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                Start
              </Button>
            </RouterLink>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

ScheduleMockInterviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleScheduleInterview: PropTypes.func.isRequired,
};

export default ScheduleMockInterviewModal;
