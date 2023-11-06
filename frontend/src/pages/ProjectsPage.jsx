import { Helmet } from "react-helmet-async";

import ProjectsView from "../views/ProjectsView";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title> Projects </title>
      </Helmet>

      <ProjectsView />
    </>
  );
};

export default ProjectsPage;
