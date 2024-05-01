import { useState } from "react";
import { Box, Grid } from "@mui/material";
import PitchCard from "./PitchCard";

const IdeaPitches = () => {
  const [openStartPitchPracticeModal, setOpenStartPitchPracticeModal] =
    useState(false);
  const [openCreatePitchModal, setOpenCreatePitchModal] = useState(false);

  const handleStartPitchPracticeOpen = () => {
    setOpenStartPitchPracticeModal(true);
  };

  const handleStartPitchPracticeClose = () => {
    setOpenStartPitchPracticeModal(false);
  };

  const handleCreatePitchOpen = () => {
    setOpenCreatePitchModal(true);
  };

  const handleCreatePitchClose = () => {
    setOpenCreatePitchModal(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="AI-Powered Business and Idea Pitch Sessions"
            subtitle="Practice your pitch with AI-powered feedback."
            callToAction="Start a Practice Session (Coming Soon...)"
            openModal={handleStartPitchPracticeOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="Create a New Business or Idea Pitch"
            subtitle="Craft a new pitch for your business or idea."
            callToAction="Create a New Pitch (Coming Soon...)"
            openModal={handleCreatePitchOpen}
          />
        </Grid>
      </Grid>

      <Box mt={4}>{/* Past Pitch Practice Sessions */}</Box>
    </>
  );
};

export default IdeaPitches;
