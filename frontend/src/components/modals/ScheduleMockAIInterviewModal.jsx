import { useContext, useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  DialogContent,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { X as CloseIcon } from "lucide-react";
import { BoardContext } from "../../contexts/BoardContext";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import InterviewsAPI from "../../services/interviews";

const ScheduleMockAIInterviewModal = ({ open, handleClose }) => {
  const [state, dispatch] = useContext(BoardContext);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const accessToken = state.user.stsTokenManager.accessToken;
      const response = await InterviewsAPI.createMockAIInterview(
        data,
        accessToken
      );
      dispatch({ type: "SET_MOCK_AI_INTERVIEW_QUESTION", payload: response });
      navigate(`/mock-interview/${response.id}`);
    } catch (error) {
      console.error("Error creating mock AI interview:", error);
      // Handle error state or show error message
    } finally {
      setLoading(false);
    }

    handleClose();
  };

  const formFields = [
    {
      name: "interviewType",
      label: "Interview Type",
      options: ["Behavioral", "Case", "Technical"],
    },
    {
      name: "level",
      label: "Level",
      options: ["Freshman", "Sophomore", "Junior", "Senior"],
    },
  ];

  const renderFormField = ({ name, label, options }) => (
    <FormControl key={name} variant="filled" fullWidth margin="normal" required>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: `${label} is required` }}
        render={({ field }) => (
          <Select labelId={`${name}-label`} {...field}>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );

  const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      paddingTop: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const StyledDialogTitle = styled(DialogTitle)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <StyledDialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        Schedule Mock AI Interview
        <IconButton aria-label="close" onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(renderFormField)}
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Company (Optional)"
                variant="filled"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Role (Optional)"
                variant="filled"
                fullWidth
                margin="normal"
              />
            )}
          />
          <DialogActions>
            <Button variant="outlined" onClick={handleClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {loading ? "Starting..." : "Start"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </StyledDialog>
  );
};

ScheduleMockAIInterviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ScheduleMockAIInterviewModal;
