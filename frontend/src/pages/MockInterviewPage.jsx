import { Helmet } from "react-helmet-async";
import MockInterviewView from "../views/MockInterviewView";

const MockInterviewPage = () => {
  return (
    <>
      <Helmet>
        <title> Mock Interview </title>
      </Helmet>

      <MockInterviewView />
    </>
  );
};

export default MockInterviewPage;
