import { useState } from "react";
import { Box, Grid } from "@mui/material";
import PitchCard from "./PitchCard";

const PersonalBranding = () => {
  const [
    openPersonalBrandingAssessmentModal,
    setOpenPersonalBrandingAssessmentModal,
  ] = useState(false);
  const [openPersonalBrandStatementModal, setOpenPersonalBrandStatementModal] =
    useState(false);
  const [
    openLinkedInProfileOptimizationModal,
    setOpenLinkedInProfileOptimizationModal,
  ] = useState(false);
  const [openElevatorPitchPracticeModal, setOpenElevatorPitchPracticeModal] =
    useState(false);

  const handlePersonalBrandingAssessmentOpen = () => {
    setOpenPersonalBrandingAssessmentModal(true);
  };

  const handlePersonalBrandingAssessmentClose = () => {
    setOpenPersonalBrandingAssessmentModal(false);
  };

  const handlePersonalBrandStatementOpen = () => {
    setOpenPersonalBrandStatementModal(true);
  };

  const handlePersonalBrandStatementClose = () => {
    setOpenPersonalBrandStatementModal(false);
  };

  const handleLinkedInProfileOptimizationOpen = () => {
    setOpenLinkedInProfileOptimizationModal(true);
  };

  const handleLinkedInProfileOptimizationClose = () => {
    setOpenLinkedInProfileOptimizationModal(false);
  };

  const handleElevatorPitchPracticeOpen = () => {
    setOpenElevatorPitchPracticeModal(true);
  };

  const handleElevatorPitchPracticeClose = () => {
    setOpenElevatorPitchPracticeModal(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="Personal Branding Assessment"
            subtitle="Evaluate your current personal brand and get personalized suggestions."
            callToAction="Take the Assessment (Coming Soon...)"
            openModal={handlePersonalBrandingAssessmentOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="Personal Brand Statement Generator"
            subtitle="Craft a compelling personal brand statement with our interactive tool."
            callToAction="Generate Your Statement (Coming Soon...)"
            openModal={handlePersonalBrandStatementOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="LinkedIn Profile Optimization"
            subtitle="Optimize your LinkedIn profile to showcase your personal brand effectively."
            callToAction="Get Optimization Tips (Coming Soon...)"
            openModal={handleLinkedInProfileOptimizationOpen}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PitchCard
            title="AI-Powered Elevator Pitch Practice"
            subtitle="Practice your elevator pitch with AI-powered feedback."
            callToAction="Start a Practice Session (Coming Soon...)"
            openModal={handleElevatorPitchPracticeOpen}
          />
        </Grid>
      </Grid>

      <Box mt={4}>{/* Past Elevator Pitch Practice Sessions */}</Box>
    </>
  );
};

export default PersonalBranding;
