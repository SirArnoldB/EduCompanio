import { Helmet } from "react-helmet-async";
import SpacesView from "../views/SpacesView";

const SpacesPage = () => {
  return (
    <>
      <Helmet>
        <title> Spaces </title>
      </Helmet>

      <SpacesView />
    </>
  );
};

export default SpacesPage;
