import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Hero from "../components/landingpage/Hero";
import Features from "../components/landingpage/Features";
import Footer from "../components/landingpage/Footer";
import LandingPageAppBar from "../components/landingpage/LandingPageAppBar";
import MissionSection from "../components/landingpage/MissionSection";
import ContactUsSection from "../components/landingpage/ContactUsSection";

/**
 * Renders the landing page with NavBar, Hero, Features, Testimonials, Sponsors and Footer components.
 * @returns {JSX.Element} LandingPage component
 */
const LandingPageView = () => {
  const [state] = useContext(BoardContext);
  const { loading } = state;

  return (
    <>
      {loading ? (
        <LoadingSpinner label="your account ..." />
      ) : (
        <>
          <LandingPageAppBar />
          <Hero />
          <Features />
          <MissionSection />
          <ContactUsSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default LandingPageView;
