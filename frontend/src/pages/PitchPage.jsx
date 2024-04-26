import { Helmet } from "react-helmet-async";
import PitchView from "../views/PitchView";

const PitchPage = () => {
  return (
    <>
      <Helmet>
        <title>Pitch</title>
      </Helmet>
      <PitchView />
    </>
  );
};

export default PitchPage;
