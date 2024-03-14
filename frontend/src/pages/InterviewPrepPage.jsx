import { Helmet } from "react-helmet-async";
import InterviewPrepView from "../views/InterviewPrepView";

const InterviewPrepPage = () => {
  return (
    <>
      <Helmet>
        <title>Interview Prep</title>
      </Helmet>
      <InterviewPrepView />
    </>
  );
};

export default InterviewPrepPage;
