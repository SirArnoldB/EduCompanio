import { useContext } from "react";
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
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { X as CloseIcon } from "lucide-react";
import { BoardContext } from "../../contexts/BoardContext";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const ScheduleMockAIInterviewModal = ({ open, handleClose }) => {
  const [, dispatch] = useContext(BoardContext);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "START_MOCK_AI_INTERVIEW", payload: data });
    dispatch({ type: "SET_LOADING_MOCK_AI_INTERVIEW", payload: true });
    navigate("/mock-interview");
  };

  const formFields = [
    {
      name: "interviewType",
      label: "Interview Type",
      options: ["Behavioral", "Case", "System Design", "Technical"],
    },
    {
      name: "company",
      label: "Company",
      options: ["Google", "Amazon", "Facebook", "Microsoft", "Apple", "Other"],
    },
    {
      name: "level",
      label: "Level",
      options: [
        "Freshman",
        "Sophomore",
        "SWE",
        "Junior",
        "Entry Level/New Grad",
      ],
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
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outlined" color="primary" type="submit">
              Start
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
