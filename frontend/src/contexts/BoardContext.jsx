import { createContext, useReducer, useEffect } from "react";
import ProjectsAPI from "../services/projects";
import JobsAPI from "../services/jobs";
import NotesAPI from "../services/notes";
import StatusesAPI from "../services/statuses";
import CategoriesAPi from "../services/categories";
import TagsAPI from "../services/tags";
import PropTypes from "prop-types";
import { generateColumns } from "../utilities/columns";
import { BoardReducer } from "../reducers/board-reducer";

// Initial state
const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || {},
  counts: {
    projects: 0,
    jobs: 0,
    notes: 0,
  },
  columns: {
    projects: {},
    jobs: {},
    notes: {},
  },
  statuses: {
    projects: [],
    jobs: [],
    notes: [],
  },
  categories: {
    projects: [],
    jobs: [],
    notes: [],
  },
  tags: {
    organizations: [],
    skills: [],
    communityJobs: [],
    communityProjects: [],
    finance: [],
    health: [],
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
    const counts = JSON.parse(sessionStorage.getItem("counts"));
    const columns = JSON.parse(sessionStorage.getItem("columns"));
    const statuses = JSON.parse(sessionStorage.getItem("statuses"));
    const categories = JSON.parse(sessionStorage.getItem("categories"));
    const tags = JSON.parse(sessionStorage.getItem("tags"));

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
    if (tags) {
      dispatch({ type: "SET_TAGS", payload: tags });
    }
  }, []);

  useEffect(() => {
    // Fetch data from APIs and dispatch actions to update state
    const fetchData = async () => {
      if (state.user.uid && state.LOAD_USER_DATA) {
        try {
          const accessToken = state.user.stsTokenManager.accessToken;

          // Projects, Jobs, and notes
          const projects = await ProjectsAPI.getAllProjects(accessToken);
          const jobs = await JobsAPI.getAllJobs(accessToken);
          const notes = await NotesAPI.getAllNotes(accessToken);

          // Counts
          const counts = {
            projects: projects.length,
            jobs: jobs.length,
            notes: notes.length,
          };

          // Statuses
          const jobStatuses = await StatusesAPI.getAllJobStatuses();
          console.log(jobStatuses);
          const noteStatuses = await StatusesAPI.getAllNoteStatuses();
          const projectStatuses = await StatusesAPI.getAllProjectStatuses();
          const statuses = {
            projects: projectStatuses,
            jobs: jobStatuses,
            notes: noteStatuses,
          };

          // Generate columns from statuses and items
          const projectColumns = generateColumns(projectStatuses, projects);
          const jobColumns = generateColumns(jobStatuses, jobs);
          const noteColumns = generateColumns(noteStatuses, notes);
          const columns = {
            projects: projectColumns,
            jobs: jobColumns,
            notes: noteColumns,
          };

          // Categories
          const jobCategories = await CategoriesAPi.getAllJobCategories();
          const noteCategories = await CategoriesAPi.getAllNoteCategories();
          const projectCategories =
            await CategoriesAPi.getAllProjectCategories();
          const categories = {
            projects: projectCategories,
            jobs: jobCategories,
            notes: noteCategories,
          };

          // Tags
          const organizations = await TagsAPI.getAllOrganizationTags();
          const skills = await TagsAPI.getAllSkillTags();
          const communityJobs = await TagsAPI.getAllCommunityJobTags();
          const communityProjects = await TagsAPI.getAllCommunityProjectTags();
          const finance = await TagsAPI.getAllFinanceTags();
          const health = await TagsAPI.getAllHealthTags();

          const tags = {
            organizations,
            skills,
            communityJobs,
            communityProjects,
            finance,
            health,
          };

          // Dispatch actions to set state
          dispatch({ type: "SET_COUNTS", payload: counts });
          dispatch({ type: "SET_COLUMNS", payload: columns });
          dispatch({ type: "SET_STATUSES", payload: statuses });
          dispatch({ type: "SET_CATEGORIES", payload: categories });
          dispatch({ type: "SET_TAGS", payload: tags });
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
