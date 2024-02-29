import ResourcesView from "../views/ResourcesView";
import { Helmet } from "react-helmet-async";

const ResourcesPage = () => {
  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <ResourcesView />
    </>
  );
};

export default ResourcesPage;
