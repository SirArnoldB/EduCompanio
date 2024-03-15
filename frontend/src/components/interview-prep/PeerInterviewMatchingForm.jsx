import { useState } from "react";
import { useForm } from "react-hook-form";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

const PeerInterviewMatchingForm = () => {
  const { register, handleSubmit } = useForm();
  const [availability, setAvailability] = useState([]);
  const [preference, setPreference] = useState("both");

  const onSubmit = (data) => {
    // Handle form submission, update availability state, and perform matching logic
    console.log(data);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
        Peer Interview Availability
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
          <FormLabel component="legend" sx={{ fontWeight: "bold" }}>
            Preference
          </FormLabel>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={preference === "both"}
                  onChange={() => setPreference("both")}
                />
              }
              label="Interviewer/Interviewee"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preference === "interviewer"}
                  onChange={() => setPreference("interviewer")}
                />
              }
              label="Interviewer"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={preference === "interviewee"}
                  onChange={() => setPreference("interviewee")}
                />
              }
              label="Interviewee"
            />
          </Box>
        </FormControl>
        <MobileDateTimePicker
          {...register("availability")}
          label="Select Date and Time"
          onChange={(newValue) => setAvailability([...availability, newValue])}
          renderInput={(params) => <TextField {...params} />}
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", marginBottom: 2 }}
        >
          Submit Availability
        </Button>
      </form>
    </Box>
  );
};

export default PeerInterviewMatchingForm;
