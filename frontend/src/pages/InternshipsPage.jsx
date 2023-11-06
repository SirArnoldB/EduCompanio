import { Helmet } from "react-helmet-async";

import InternshipsView from "../views/InternshipsView";

const InternshipsPage = () => {
  return (
    <>
      <Helmet>
        <title> Internships </title>
      </Helmet>

      <InternshipsView />
    </>
  );
};

export default InternshipsPage;
