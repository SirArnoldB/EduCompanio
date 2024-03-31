import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Checkbox,
  TextField,
  Card,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { Mail, User, Plus } from "lucide-react";
import { useState } from "react";
import Proptypes from "prop-types";

const ViewPeerInterviewEvent = ({ open, onClose, event }) => {
  const [addCollaborator, setAddCollaborator] = useState(false);
  const [collaboratorTwo, setCollaboratorTwo] = useState({
    name: "",
    email: "",
  });

  const handleAddCollaborator = () => {
    setAddCollaborator(true);
  };

  const handleCollaboratorChange = (e) => {
    setCollaboratorTwo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCollaboratorSubmit = () => {
    // Handle collaborator addition logic here
    console.log("Collaborator data:", collaboratorTwo);
    setAddCollaborator(false);
    setCollaboratorTwo({ name: "", email: "" });
  };

  return (
    <>
      {event && (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
          <DialogTitle
            sx={{
              textTransform: "capitalize",
            }}
          >
            {event.title || "Event Details"}
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                "@media (max-width: 900px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Event Details
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Peer Interview Title
                    </Typography>
                    <Typography variant="body1">
                      {event.title || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Peer Role
                    </Typography>
                    <Typography variant="body1">
                      {event.peerRole || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Start Date and Time
                    </Typography>
                    <Typography variant="body1">
                      {event.start.toString() || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      End Date and Time
                    </Typography>
                    <Typography variant="body1">
                      {event.end.toString() || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Interview Type
                    </Typography>
                    <Typography variant="body1">
                      {event.interviewType || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Location or Meeting Link
                    </Typography>
                    <Typography variant="body1">
                      {event.location || "N/A"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Additional Notes or Comments
                    </Typography>
                    <Typography variant="body1">
                      {event.notes || "N/A"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Card
                sx={{
                  flex: 1,
                  padding: 2,
                  "@media (max-width: 900px)": {
                    marginTop: 4,
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Collaborators
                </Typography>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar>
                      <User size={20} />
                    </Avatar>
                    <Box>
                      <Typography variant="body1">
                        {event.collaborator1Name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <Mail size={16} /> {event.collaborator1Email}
                      </Typography>
                    </Box>
                  </Box>
                  {event.hasCollaboratorTwo && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar>
                        <User size={20} />
                      </Avatar>
                      <Box>
                        <Typography variant="body1">
                          {event.collaborator2Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          <Mail size={16} /> {event.collaborator2Email}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  {!event.hasCollaboratorTwo && (
                    <Box>
                      <Checkbox
                        checked={addCollaborator}
                        onChange={handleAddCollaborator}
                        icon={<Plus size={16} />}
                        checkedIcon={<Plus size={16} />}
                      />
                      <Typography variant="body2" color="textSecondary">
                        Add Second Collaborator
                      </Typography>
                    </Box>
                  )}
                  {addCollaborator && (
                    <Box component="form" onSubmit={handleCollaboratorSubmit}>
                      <TextField
                        name="name"
                        label="Collaborator 2 Name"
                        value={collaboratorTwo.name}
                        onChange={handleCollaboratorChange}
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        name="email"
                        label="Collaborator 2 Email"
                        value={collaboratorTwo.email}
                        onChange={handleCollaboratorChange}
                        fullWidth
                        margin="normal"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Add Collaborator
                      </Button>
                    </Box>
                  )}
                </Stack>
              </Card>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

ViewPeerInterviewEvent.propTypes = {
  open: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
  event: Proptypes.object,
};

export default ViewPeerInterviewEvent;
