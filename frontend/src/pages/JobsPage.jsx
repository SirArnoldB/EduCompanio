import { Helmet } from "react-helmet-async";

import JobsView from "../views/JobsView";

const JobsPage = () => {
  return (
    <>
      <Helmet>
        <title> Jobs </title>
      </Helmet>

      <JobsView />
    </>
  );
};

export default JobsPage;
