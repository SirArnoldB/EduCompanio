import { Helmet } from "react-helmet-async";

import NotesView from "../views/NotesView";

const NotesPage = () => {
  return (
    <>
      <Helmet>
        <title> Notes </title>
      </Helmet>

      <NotesView />
    </>
  );
};

export default NotesPage;
