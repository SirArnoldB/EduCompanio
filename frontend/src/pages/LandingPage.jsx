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
  return (
    <div>
      <NavBar />
      <div style={{ padding: "0 10px" }}>
        <Hero />
        <Features />
        <Testimonials />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
