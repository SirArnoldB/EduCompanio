import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Hero from "../components/landingpage/Hero";
import Features from "../components/landingpage/Features";
import Footer from "../components/landingpage/Footer";
import LandingPageAppBar from "../components/landingpage/LandingPageAppBar";
import MissionSection from "../components/landingpage/MissionSection";
import ContactUsSection from "../components/landingpage/ContactUsSection";
import { Box } from "@mui/material";

/**
 * Renders the landing page view.
 *
 * @component
 * @returns {JSX.Element} The landing page view.
 */
const LandingPageView = () => {
  const [state] = useContext(BoardContext);
  const { loading } = state;

  return (
    <>
      {loading ? (
        <LoadingSpinner label="your account ..." />
      ) : (
        <Box>
          <LandingPageAppBar />
          <Hero />
          <Features />
          <MissionSection />
          <ContactUsSection />
          <Footer />
        </Box>
      )}
    </>
  );
};

export default LandingPageView;
