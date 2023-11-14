import { createContext, useReducer, useEffect } from "react";
import ProjectsAPI from "../services/projects";
import InternshipsAPI from "../services/internships";
import NotesAPI from "../services/notes";
import StatusesAPI from "../services/statuses";
import CategoriesAPi from "../services/categories";
import PropTypes from "prop-types";
import { generateColumns } from "../utilities/columns";

// Initial state
const initialState = {
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
  loading: true,
  error: null,
};

// Define the reducer function
const boardReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLUMNS":
      return {
        ...state,
        columns: {
          ...state.columns,
          ...action.payload,
        },
        loading: false,
      };
    case "SET_STATUSES":
      return {
        ...state,
        statuses: {
          ...state.statuses,
          ...action.payload,
        },
        loading: false,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: {
          ...state.categories,
          ...action.payload,
        },
        loading: false,
      };
    case "ADD_PROJECT":
      return {
        ...state,
        columns: {
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
        },
      };
    case "ADD_INTERNSHIP":
      return {
        ...state,
        columns: {
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
        },
      };
    case "ADD_NOTE":
      return {
        ...state,
        columns: {
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
        },
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        columns: {
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
        },
      };
    case "DELETE_INTERNSHIP":
      return {
        ...state,
        columns: {
          ...state.columns,
          internships: {
            ...state.columns.internships,
            [action.payload.status_id]: {
              ...state.columns.internships[action.payload.status_id],
              items: state.columns.internships[
                action.payload.status_id
              ].items.filter(
                (internship) => internship.id !== action.payload.id
              ),
            },
          },
        },
      };
    case "DELETE_NOTE":
      return {
        ...state,
        columns: {
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
        },
      };
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
      return {
        ...state,
        columns: {
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
        },
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
      return {
        ...state,
        columns: {
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
        },
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
      return {
        ...state,
        columns: {
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
        },
      };
    }
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

  useEffect(() => {
    // Fetch data from APIs and dispatch actions to update state
    const fetchData = async () => {
      try {
        // Projects, internships, and notes
        const projects = await ProjectsAPI.getAllProjects();
        const internships = await InternshipsAPI.getAllInternships();
        const notes = await NotesAPI.getAllNotes();

        // Statuses
        const internshipStatuses = await StatusesAPI.getAllInternshipStatuses();
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
        const projectCategories = await CategoriesAPi.getAllProjectCategories();
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
    };
    fetchData();
  }, []);

  return (
    <BoardContext.Provider value={[state, dispatch]}>
      {children}
    </BoardContext.Provider>
  );
};

BoardContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
