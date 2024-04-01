import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import Proptypes from "prop-types";

const PeerRole = {
  InterviewerInterviewee: "interviewer/interviewee",
  Interviewer: "interviewer",
  Interviewee: "interviewee",
};

const InterviewType = {
  Technical: "technical",
  Behavioral: "behavioral",
  Case: "case",
  SystemDesign: "system design",
};

const AddPeerInterviewEvent = ({ open, onClose }) => {
  const { control, handleSubmit, reset } = useForm();
  const [peerRole, setPeerRole] = useState("");
  const [hasCollaborator, setHasCollaborator] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle event creation logic here
    reset();
    onClose();
  };

  const handlePeerRoleChange = (event) => {
    setPeerRole(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add Event</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Peer Interview Title"
                variant="filled"
              />
            )}
          />
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel id="peer-role-label">Your Peer Role</InputLabel>
            <Select
              labelId="peer-role-label"
              value={peerRole}
              onChange={handlePeerRoleChange}
              label="Your Peer Role"
            >
              <MenuItem value={PeerRole.InterviewerInterviewee}>
                Interviewer/Interviewee
              </MenuItem>
              <MenuItem value={PeerRole.Interviewer}>Interviewer</MenuItem>
              <MenuItem value={PeerRole.Interviewee}>Interviewee</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Controller
              name="start"
              control={control}
              defaultValue={dayjs()}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  type="datetime-local"
                  label="Start Date and Time"
                  variant="filled"
                />
              )}
            />
            <Controller
              name="end"
              control={control}
              defaultValue={dayjs().add(1, "hour")}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  type="datetime-local"
                  label="End Date and Time"
                  variant="filled"
                />
              )}
            />
          </Box>
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel id="interview-type-label">Interview Type</InputLabel>
            <Controller
              name="interviewType"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="interview-type-label"
                  label="Interview Type"
                >
                  <MenuItem value={InterviewType.Technical}>Technical</MenuItem>
                  <MenuItem value={InterviewType.Behavioral}>
                    Behavioral
                  </MenuItem>
                  <MenuItem value={InterviewType.Case}>Case</MenuItem>
                  <MenuItem value={InterviewType.SystemDesign}>
                    System Design
                  </MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Controller
              name="collaboratorOne.name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  label="Collaborator 1 Name"
                  variant="filled"
                  fullWidth
                />
              )}
            />
            <Controller
              name="collaboratorOne.email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  label="Collaborator 1 Email"
                  variant="filled"
                  fullWidth
                />
              )}
            />
          </Box>

          <FormControlLabel
            control={
              <Controller
                name="hasCollaborator"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    onChange={(e) => {
                      setHasCollaborator(e.target.checked);
                      field.onChange(e);
                    }}
                    checked={field.value}
                  />
                )}
              />
            }
            label="I have a collaborator in mind for this event"
          />

          {hasCollaborator && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Controller
                name="collaboratorTwo.name"
                control={control}
                defaultValue=""
                rules={{ required: hasCollaborator }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    label="Collaborator 2 Name"
                    variant="filled"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="collaboratorTwo.email"
                control={control}
                defaultValue=""
                rules={{ required: hasCollaborator }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    label="Collaborator 2 Email"
                    variant="filled"
                    fullWidth
                  />
                )}
              />
            </Box>
          )}

          <Controller
            name="notes"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                multiline
                rows={4}
                label="Additional Notes or Comments"
                variant="filled"
              />
            )}
          />

          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Location or Meeting Link"
                variant="filled"
              />
            )}
          />

          <Controller
            name="reminder"
            control={control}
            defaultValue={dayjs()}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                type="datetime-local"
                label="Reminder Date and Time"
                variant="filled"
              />
            )}
          />

          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button variant="contained" color="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Create Event
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

AddPeerInterviewEvent.propTypes = {
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
};
export default AddPeerInterviewEvent;
