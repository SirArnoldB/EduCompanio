import { useContext } from "react";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { BoardContext } from "../contexts/BoardContext";
import PropTypes from "prop-types";

const StatCard = ({ title, value }) => (
  <Grid
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
    item
    xs={4}
  >
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {value}
      </Typography>
    </Paper>
  </Grid>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const ProfileView = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(BoardContext);

  const totalNotes = Object.keys(state.columns?.notes).length ?? 0;
  const totalInternships = Object.keys(state.columns?.internships).length ?? 0;
  const totalProjects = Object.keys(state.columns?.projects).length ?? 0;

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              src={state.user?.photoURL}
              alt={state.user?.displayName}
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="h4" gutterBottom>
              {state.user?.displayName
                ? state.user.displayName
                : "EduCompanio User"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {`${state.user?.email ? state.user.email : ""}`}
            </Typography>
          </Paper>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          item
          xs={12}
        >
          <Grid container spacing={3}>
            <StatCard title="Total Notes" value={totalNotes} />
            <StatCard title="Total Internships" value={totalInternships} />
            <StatCard title="Total Projects" value={totalProjects} />
          </Grid>
          <Button
            sx={{
              m: 2,
            }}
            variant="outlined"
            color="error"
          >
            Delete Account
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileView;
