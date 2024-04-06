import { Helmet } from "react-helmet-async";
import LandingPageView from "../views/LandingPageView";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>

      <LandingPageView />
    </>
  );
};

export default LandingPage;
