import { createContext, useReducer, useEffect } from "react";
import InitialzeDataAPI from "../services/initialize-examples";
import ProjectsAPI from "../services/projects";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import StatusesAPI from "../services/statuses";
import CategoriesAPi from "../services/categories";
import PropTypes from "prop-types";
import { generateColumns } from "../utilities/columns";

// Initial state
const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || {},
  counts: {
    projects: 0,
    internships: 0,
    notes: 0,
  },
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

// Define the reducer function
const boardReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USER_DATA":
      return {
        ...state,
        LOAD_USER_DATA: action.payload,
      };
    case "SIGN_IN":
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case "SIGN_OUT":
      sessionStorage.removeItem("user");
      return {
        ...state,
        user: {},
      };
    case "SET_USER":
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case "SET_COUNTS": {
      const newCounts = { ...state.counts, ...action.payload };
      sessionStorage.setItem("counts", JSON.stringify(newCounts));
      return {
        ...state,
        counts: newCounts,
      };
    }
    case "SET_COLUMNS": {
      const newColumns = { ...state.columns, ...action.payload };
      sessionStorage.setItem("columns", JSON.stringify(newColumns));
      return {
        ...state,
        columns: newColumns,
      };
    }
    case "SET_STATUSES": {
      const newStatuses = { ...state.statuses, ...action.payload };
      sessionStorage.setItem("statuses", JSON.stringify(newStatuses));
      return {
        ...state,
        statuses: newStatuses,
      };
    }
    case "SET_CATEGORIES": {
      const newCategories = { ...state.categories, ...action.payload };
      sessionStorage.setItem("categories", JSON.stringify(newCategories));
      return {
        ...state,
        categories: newCategories,
      };
    }
    case "ADD_PROJECT": {
      const newColumns = {
        ...state.columns,
        projects: {
          ...state.columns.projects,
          [action.payload.status_id]: {
            ...state.columns.projects[action.payload.status_id],
            items: [
              action.payload,
              ...state.columns.projects[action.payload.status_id].items,
            ],
          },
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "ADD_INTERNSHIP": {
      const newColumns = {
        ...state.columns,
        internships: {
          ...state.columns.internships,
          [action.payload.status_id]: {
            ...state.columns.internships[action.payload.status_id],
            items: [
              action.payload,
              ...state.columns.internships[action.payload.status_id].items,
            ],
          },
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "ADD_NOTE": {
      const newColumns = {
        ...state.columns,
        notes: {
          ...state.columns.notes,
          [action.payload.status_id]: {
            ...state.columns.notes[action.payload.status_id],
            items: [
              action.payload,
              ...state.columns.notes[action.payload.status_id].items,
            ],
          },
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "DELETE_PROJECT": {
      const newColumns = {
        ...state.columns,
        projects: {
          ...state.columns.projects,
          [action.payload.status_id]: {
            ...state.columns.projects[action.payload.status_id],
            items: state.columns.projects[
              action.payload.status_id
            ].items.filter((project) => project.id !== action.payload.id),
          },
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "DELETE_INTERNSHIP": {
      const newColumns = {
        ...state.columns,
        internships: {
          ...state.columns.internships,
          [action.payload.status_id]: {
            ...state.columns.internships[action.payload.status_id],
            items: state.columns.internships[
              action.payload.status_id
            ].items.filter((internship) => internship.id !== action.payload.id),
          },
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "DELETE_NOTE": {
      const newColumns = {
        ...state.columns,
        notes: {
          ...state.columns.notes,
          [action.payload.status_id]: {
            ...state.columns.notes[action.payload.status_id],
            items: state.columns.notes[action.payload.status_id].items.filter(
              (note) => note.id !== action.payload.id
            ),
          },
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));
      return {
        ...state,
        columns: newColumns,
      };
    }
    case "UPDATE_PROJECT": {
      const { original_status_id, updatedItem } = action.payload;
      const projects = state.columns.projects;
      const updatedProjectsInOriginalColumn = projects[
        original_status_id
      ].items.filter((project) => project.id !== updatedItem.id);
      const updatedProjectsInNewColumn = [
        action.payload.updatedItem,
        ...projects[updatedItem.status_id].items.filter(
          (project) => project.id !== updatedItem.id
        ),
      ];

      const newColumns = {
        ...state.columns,
        projects: {
          ...projects,
          [updatedItem.status_id]: {
            ...projects[updatedItem.status_id],
            items: updatedProjectsInNewColumn,
          },
          ...(original_status_id !== updatedItem.status_id && {
            [original_status_id]: {
              ...projects[original_status_id],
              items: updatedProjectsInOriginalColumn,
            },
          }),
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "UPDATE_INTERNSHIP": {
      const { original_status_id, updatedItem } = action.payload;
      const internships = state.columns.internships;
      const updatedInternshipsInOriginalColumn = internships[
        original_status_id
      ].items.filter((internship) => internship.id !== updatedItem.id);
      const updatedInternshipsInNewColumn = [
        action.payload.updatedItem,
        ...internships[updatedItem.status_id].items.filter(
          (internship) => internship.id !== updatedItem.id
        ),
      ];

      const newColumns = {
        ...state.columns,
        internships: {
          ...internships,
          [updatedItem.status_id]: {
            ...internships[updatedItem.status_id],
            items: updatedInternshipsInNewColumn,
          },
          ...(original_status_id !== updatedItem.status_id && {
            [original_status_id]: {
              ...internships[original_status_id],
              items: updatedInternshipsInOriginalColumn,
            },
          }),
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));
      return {
        ...state,
        columns: newColumns,
      };
    }
    case "UPDATE_NOTE": {
      const { original_status_id, updatedItem } = action.payload;
      const notes = state.columns.notes;

      const updatedNotesInOriginalColumn = notes[
        original_status_id
      ].items.filter((note) => note.id !== updatedItem.id);

      const updatedNotesInNewColumn = [
        action.payload.updatedItem,
        ...notes[updatedItem.status_id].items.filter(
          (note) => note.id !== updatedItem.id
        ),
      ];

      const newColumns = {
        ...state.columns,
        notes: {
          ...notes,
          [updatedItem.status_id]: {
            ...notes[updatedItem.status_id],
            items: updatedNotesInNewColumn,
          },
          ...(original_status_id !== updatedItem.status_id && {
            [original_status_id]: {
              ...notes[original_status_id],
              items: updatedNotesInOriginalColumn,
            },
          }),
        },
      };

      sessionStorage.setItem("columns", JSON.stringify(newColumns));

      return {
        ...state,
        columns: newColumns,
      };
    }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Create the context
export const BoardContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const BoardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  // Hydrate state from sessionStorage on mount
  useEffect(() => {
    const counts = JSON.parse(sessionStorage.getItem("counts"));
    const columns = JSON.parse(sessionStorage.getItem("columns"));
    const statuses = JSON.parse(sessionStorage.getItem("statuses"));
    const categories = JSON.parse(sessionStorage.getItem("categories"));

    if (counts) {
      dispatch({ type: "SET_COUNTS", payload: counts });
    }
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
          const counts = {
            projects: projects.length,
            internships: internships.length,
            notes: notes.length,
          };

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
          dispatch({ type: "SET_COUNTS", payload: counts });
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
