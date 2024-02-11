import { createContext, useReducer, useEffect } from "react";
import InitialzeDataAPI from "../services/initialize-examples";
import ProjectsAPI from "../services/projects";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import StatusesAPI from "../services/statuses";
import CategoriesAPi from "../services/categories";
import PropTypes from "prop-types";
import { generateColumns } from "../utilities/columns";
import { BoardReducer } from "../reducers/board-reducer";

// Initial state
const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || {},
  columns: {
    projects: {},
    internships: {},
    notes: {},
  },
  statuses: {
    projects: [],
    internships: [],
    notes: [],
  },
  categories: {
    projects: [],
    internships: [],
    notes: [],
  },
  API_URL:
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === "production"
      ? "https://educompanio-prod-server.up.railway.app"
      : "http://localhost:3000",
  loading: false,
  error: null,
  LOAD_USER_DATA: false,
};

// Create the context
export const BoardContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const BoardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  // Hydrate state from sessionStorage on mount
  useEffect(() => {
    const columns = JSON.parse(sessionStorage.getItem("columns"));
    const statuses = JSON.parse(sessionStorage.getItem("statuses"));
    const categories = JSON.parse(sessionStorage.getItem("categories"));

    if (columns) {
      dispatch({ type: "SET_COLUMNS", payload: columns });
    }
    if (statuses) {
      dispatch({ type: "SET_STATUSES", payload: statuses });
    }
    if (categories) {
      dispatch({ type: "SET_CATEGORIES", payload: categories });
    }
  }, []);

  useEffect(() => {
    // Fetch data from APIs and dispatch actions to update state
    const fetchData = async () => {
      if (state.user.uid && state.LOAD_USER_DATA) {
        try {
          const accessToken = state.user.stsTokenManager.accessToken;

          // If the user signed in for the first time, initialize the user's data
          // in the database
          if (
            state.user.metadata.createdAt === state.user.metadata.lastSignedInAt
          ) {
            await InitialzeDataAPI.initializeExamples(accessToken);
          }

          // Projects, internships, and notes
          const projects = await ProjectsAPI.getAllProjects(accessToken);
          const internships = await InternshipsAPI.getAllInternships(
            accessToken
          );
          const notes = await NotesAPI.getAllNotes(accessToken);

          // Statuses
          const internshipStatuses =
            await StatusesAPI.getAllInternshipStatuses();
          const noteStatuses = await StatusesAPI.getAllNoteStatuses();
          const projectStatuses = await StatusesAPI.getAllProjectStatuses();
          const statuses = {
            projects: projectStatuses,
            internships: internshipStatuses,
            notes: noteStatuses,
          };

          // Generate columns from statuses and items
          const projectColumns = generateColumns(projectStatuses, projects);
          const internshipColumns = generateColumns(
            internshipStatuses,
            internships
          );
          const noteColumns = generateColumns(noteStatuses, notes);
          const columns = {
            projects: projectColumns,
            internships: internshipColumns,
            notes: noteColumns,
          };

          // Categories
          const internshipCategories =
            await CategoriesAPi.getAllInternshipCategories();
          const noteCategories = await CategoriesAPi.getAllNoteCategories();
          const projectCategories =
            await CategoriesAPi.getAllProjectCategories();
          const categories = {
            projects: projectCategories,
            internships: internshipCategories,
            notes: noteCategories,
          };

          // Dispatch actions to set state
          dispatch({ type: "SET_COLUMNS", payload: columns });
          dispatch({ type: "SET_STATUSES", payload: statuses });
          dispatch({ type: "SET_CATEGORIES", payload: categories });
        } catch (error) {
          dispatch({ type: "SET_ERROR", payload: error });
        }

        // Set LOAD_USER_DATA to false
        dispatch({ type: "LOAD_USER_DATA", payload: false });
      }
    };
    fetchData();
  }, [state.user, state.LOAD_USER_DATA]);

  return (
    <BoardContext.Provider value={[state, dispatch]}>
      {children}
    </BoardContext.Provider>
  );
};

BoardContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
