import { useContext } from "react";
import { Avatar, Box, Card, Grid, Paper, Typography } from "@mui/material";
import { BoardContext } from "../contexts/BoardContext";
import PropTypes from "prop-types";
import ResumeSection from "../components/profile/ResumeSection";
import DangerZone from "../components/profile/DangerZone";
import Preferences from "../components/profile/Preferences";

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

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
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
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Preferences />
          <ResumeSection />
          <DangerZone />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileView;
