import { Helmet } from "react-helmet-async";
import WellnessView from "../views/WellnessView";

const WellnessPage = () => {
  return (
    <>
      <Helmet>
        <title>Wellness</title>
      </Helmet>
      <WellnessView />
    </>
  );
};

export default WellnessPage;
