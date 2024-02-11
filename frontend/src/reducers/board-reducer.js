import {
    LoadUserData,
    SignIn,
    SignOut,
    SetUser,
    SetColumns,
    SetStatuses,
    SetCategories,
    AddProject,
    AddInternship,
    AddNote,
    DeleteProject,
    DeleteInternship,
    DeleteNote,
    UpdateProject,
    UpdateInternship,
    UpdateNote,
    SetLoading,
    SetError,
} from "../actions/actions";

const BoardReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_USER_DATA":
            return LoadUserData(state, action.payload);
        case "SIGN_IN":
            return SignIn(state, action.payload);
        case "SIGN_OUT":
            return SignOut(state);
        case "SET_USER":
            return SetUser(state, action.payload);
        case "SET_COLUMNS":
            return SetColumns(state, action.payload);
        case "SET_STATUSES":
            return SetStatuses(state, action.payload);
        case "SET_CATEGORIES":
            return SetCategories(state, action.payload);
        case "ADD_PROJECT":
            return AddProject(state, action.payload);
        case "ADD_INTERNSHIP":
            return AddInternship(state, action.payload);
        case "ADD_NOTE":
            return AddNote(state, action.payload);
        case "DELETE_PROJECT":
            return DeleteProject(state, action.payload);
        case "DELETE_INTERNSHIP":
            return DeleteInternship(state, action.payload);
        case "DELETE_NOTE":
            return DeleteNote(state, action.payload);
        case "UPDATE_PROJECT":
            return UpdateProject(state, action.payload);
        case "UPDATE_INTERNSHIP":
            return UpdateInternship(state, action.payload);
        case "UPDATE_NOTE":
            return UpdateNote(state, action.payload);
        case "SET_LOADING":
            return SetLoading(state, action.payload);
        case "SET_ERROR":
            return SetError(state, action.payload);
        default:
            return state;
    }
};

export { BoardReducer }