import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { styled } from "@mui/system";
import { X as CloseIcon } from "lucide-react";
import Proptypes from "prop-types";

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

const ResourcesModal = ({ open, handleClose, resourceDetails }) => {
  return (
    <StyledDialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        Resource Details
        <IconButton aria-label="close" onClick={handleClose} size="large">
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom variant="h5" component="div">
          {resourceDetails.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {resourceDetails.description}
        </Typography>
        <Box mt={2} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {resourceDetails.tags.map((tag, index) => (
            <Chip key={index} label={tag} color="primary" variant="outlined" />
          ))}
        </Box>
      </DialogContent>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          gap: 2,
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="outlined"
          href={resourceDetails.url}
          target="_blank"
          startIcon={<OpenInNewIcon />}
        >
          Open Resource
        </Button>
      </Box>
    </StyledDialog>
  );
};

ResourcesModal.propTypes = {
  open: Proptypes.bool.isRequired,
  handleClose: Proptypes.func.isRequired,
  resourceDetails: Proptypes.shape({
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    url: Proptypes.string.isRequired,
    tags: Proptypes.arrayOf(Proptypes.string).isRequired,
  }).isRequired,
};

export default ResourcesModal;
