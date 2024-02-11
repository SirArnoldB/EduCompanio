const LoadUserData = (state, payload) => {
    return {
        ...state,
        LOAD_USER_DATA: payload
        ,
    }
}

const SignIn = (state, payload) => {
    sessionStorage.setItem("user", JSON.stringify(payload));
    return {
        ...state,
        user: payload
        ,
    }
}

const SignOut = (state) => {
    sessionStorage.removeItem("user");
    return {
        ...state,
        user: {}
        ,
    }
}

const SetUser = (state, payload) => {
    sessionStorage.setItem("user", JSON.stringify(payload));
    return {
        ...state,
        user: payload
        ,
    }
}

const SetCounts = (state, payload) => {
    const newCounts = { ...state.counts, ...payload };
    sessionStorage.setItem("counts", JSON.stringify(newCounts));
    return {
        ...state,
        counts: newCounts,
    };
}

const SetColumns = (state, payload) => {
    const newColumns = { ...state.columns, ...payload };
    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    return {
        ...state,
        columns: newColumns
        ,
    }
}

const SetStatuses = (state, payload) => {
    const newStatuses = { ...state.statuses, ...payload };
    sessionStorage.setItem("statuses", JSON.stringify(newStatuses));
    return {
        ...state,
        statuses: newStatuses
        ,
    }
}

const SetCategories = (state, payload) => {
    const newCategories = { ...state.categories, ...payload };
    sessionStorage.setItem("categories", JSON.stringify(newCategories));
    return {
        ...state,
        categories: newCategories
        ,
    }
}

const AddProject = (state, payload) => {
    const newColumns = {
        ...state.columns,
        projects: {
            ...state.columns.projects,
            [payload.status_id]: {
                ...state.columns.projects[payload.status_id],
                items: [
                    payload,
                    ...state.columns.projects[payload.status_id].items,
                ],
            },
        },
    };

    const newCounts = {
        ...state.counts,
        projects: state.counts.projects + 1,
    };

    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    sessionStorage.setItem("counts", JSON.stringify(newCounts));

    return {
        ...state,
        columns: newColumns,
        counts: newCounts,
    };
}

const AddInternship = (state, payload) => {
    const newColumns = {
        ...state.columns,
        internships: {
            ...state.columns.internships,
            [payload.status_id]: {
                ...state.columns.internships[payload.status_id],
                items: [
                    payload,
                    ...state.columns.internships[payload.status_id].items,
                ],
            },
        },
    };

    const newCounts = {
        ...state.counts,
        internships: state.counts.internships + 1,
    };

    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    sessionStorage.setItem("counts", JSON.stringify(newCounts));

    return {
        ...state,
        columns: newColumns,
        counts: newCounts,
    };
}


const AddNote = (state, payload) => {
    const newColumns = {
        ...state.columns,
        notes: {
            ...state.columns.notes,
            [payload.status_id]: {
                ...state.columns.notes[payload.status_id],
                items: [
                    payload,
                    ...state.columns.notes[payload.status_id].items,
                ],
            },
        },
    };

    const newCounts = {
        ...state.counts,
        notes: state.counts.notes + 1,
    };

    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    sessionStorage.setItem("counts", JSON.stringify(newCounts));

    return {
        ...state,
        columns: newColumns,
        counts: newCounts,
    };
}

const DeleteProject = (state, payload) => {
    const newColumns = {
        ...state.columns,
        projects: {
            ...state.columns.projects,
            [
                payload.status_id]: {
                ...state.columns.projects[
                payload.status_id],
                items: state.columns.projects[

                    payload.status_id
                ].items.filter((project) => project.id !==
                    payload.id),
            },
        },
    };

    const newCounts = {
        ...state.counts,
        projects: state.counts.projects - 1 < 0 ? 0 : state.counts.projects - 1,
    };

    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    sessionStorage.setItem("counts", JSON.stringify(newCounts));

    return {
        ...state,
        columns: newColumns,
        counts: newCounts,
    };
}

const DeleteInternship = (state, payload) => {
    const newColumns = {
        ...state.columns,
        internships: {
            ...state.columns.internships,
            [payload.status_id]: {
                ...state.columns.internships[payload.status_id],
                items: state.columns.internships[
                    payload.status_id
                ].items.filter((internship) => internship.id !== payload.id),
            },
        },
    };

    const newCounts = {
        ...state.counts,
        internships: state.counts.internships - 1 < 0 ? 0 : state.counts.internships - 1,
    };

    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    sessionStorage.setItem("counts", JSON.stringify(newCounts));

    return {
        ...state,
        columns: newColumns,
        counts: newCounts,
    };
}

const DeleteNote = (state, payload) => {
    const newColumns = {
        ...state.columns,
        notes: {
            ...state.columns.notes,
            [
                payload.status_id]: {
                ...state.columns.notes[
                payload.status_id],
                items: state.columns.notes[
                    payload.status_id].items.filter(
                        (note) => note.id !==
                            payload.id
                    ),
            },
        },
    };

    const newCounts = {
        ...state.counts,
        notes: state.counts.notes - 1 < 0 ? 0 : state.counts.notes - 1,
    };

    sessionStorage.setItem("columns", JSON.stringify(newColumns));
    sessionStorage.setItem("counts", JSON.stringify(newCounts));

    return {
        ...state,
        columns: newColumns,
        counts: newCounts,
    };
}

const UpdateProject = (state, payload) => {
    const { original_status_id, updatedItem } = payload;
    const projects = state.columns.projects;
    const updatedProjectsInOriginalColumn = projects[
        original_status_id
    ].items.filter((project) => project.id !== updatedItem.id);
    const updatedProjectsInNewColumn = [
        payload.updatedItem,
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

const UpdateInternship = (state, payload) => {
    const { original_status_id, updatedItem } =
        payload;
    const internships = state.columns.internships;
    const updatedInternshipsInOriginalColumn = internships[
        original_status_id
    ].items.filter((internship) => internship.id !== updatedItem.id);
    const updatedInternshipsInNewColumn = [

        payload.updatedItem,
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

const UpdateNote = (state, payload) => {
    const { original_status_id, updatedItem } =
        payload;
    const notes = state.columns.notes;

    const updatedNotesInOriginalColumn = notes[
        original_status_id
    ].items.filter((note) => note.id !== updatedItem.id);

    const updatedNotesInNewColumn = [

        payload.updatedItem,
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

const SetLoading = (state, payload) => {
    return {
        ...state,
        loading: payload
        ,
    }
}

const SetError = (state, payload) => {
    return {
        ...state,
        error: payload,
    }
}


export {
    LoadUserData,
    SignIn,
    SignOut,
    SetUser,
    SetCounts,
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
}