import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Hero from "../components/landingpage/Hero";
import NavBar from "../components/landingpage/NavBar";
import Testimonials from "../components/landingpage/Testimonials";
import Features from "../components/landingpage/Features";
import Footer from "../components/landingpage/Footer";
import Sponsors from "../components/landingpage/Sponsors";
import "../css/LandingPage.css";

/**
 * Renders the landing page with NavBar, Hero, Features, Testimonials, Sponsors and Footer components.
 * @returns {JSX.Element} LandingPage component
 */
const LandingPage = () => {
  const [state] = useContext(BoardContext);
  const { loading } = state;

  return (
    <>
      {loading ? (
        <LoadingSpinner label="your account ..." />
      ) : (
        <>
          <NavBar />
          <div style={{ padding: "0 10px" }}>
            <Hero />
            <Features />
            <Testimonials />
            <Sponsors />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default LandingPage;
