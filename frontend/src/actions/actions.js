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
            [payload.statusId]: {
                ...state.columns.projects[payload.statusId],
                items: [
                    payload,
                    ...state.columns.projects[payload.statusId].items,
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

const AddJob = (state, payload) => {
    const newColumns = {
        ...state.columns,
        jobs: {
            ...state.columns.jobs,
            [payload.statusId]: {
                ...state.columns.jobs[payload.statusId],
                items: [
                    payload,
                    ...state.columns.jobs[payload.statusId].items,
                ],
            },
        },
    };

    const newCounts = {
        ...state.counts,
        jobs: state.counts.jobs + 1,
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
            [payload.statusId]: {
                ...state.columns.notes[payload.statusId],
                items: [
                    payload,
                    ...state.columns.notes[payload.statusId].items,
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
                payload.statusId]: {
                ...state.columns.projects[
                payload.statusId],
                items: state.columns.projects[

                    payload.statusId
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

const DeleteJob = (state, payload) => {
    const newColumns = {
        ...state.columns,
        jobs: {
            ...state.columns.jobs,
            [payload.statusId]: {
                ...state.columns.jobs[payload.statusId],
                items: state.columns.jobs[
                    payload.statusId
                ].items.filter((job) => job.id !== payload.id),
            },
        },
    };

    const newCounts = {
        ...state.counts,
        jobs: state.counts.jobs - 1 < 0 ? 0 : state.counts.jobs - 1,
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
                payload.statusId]: {
                ...state.columns.notes[
                payload.statusId],
                items: state.columns.notes[
                    payload.statusId].items.filter(
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
    const { originalStatusId, updatedItem } = payload;
    const projects = state.columns.projects;
    const updatedProjectsInOriginalColumn = projects[
        originalStatusId
    ].items.filter((project) => project.id !== updatedItem.id);
    const updatedProjectsInNewColumn = [
        payload.updatedItem,
        ...projects[updatedItem.statusId].items.filter(
            (project) => project.id !== updatedItem.id
        ),
    ];

    const newColumns = {
        ...state.columns,
        projects: {
            ...projects,
            [updatedItem.statusId]: {
                ...projects[updatedItem.statusId],
                items: updatedProjectsInNewColumn,
            },
            ...(originalStatusId !== updatedItem.statusId && {
                [originalStatusId]: {
                    ...projects[originalStatusId],
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

const UpdateJob = (state, payload) => {
    const { originalStatusId, updatedItem } =
        payload;
    const jobs = state.columns.jobs;
    const updatedJobsInOriginalColumn = jobs[
        originalStatusId
    ].items.filter((job) => job.id !== updatedItem.id);
    const updatedJobsInNewColumn = [

        payload.updatedItem,
        ...jobs[updatedItem.statusId].items.filter(
            (job) => job.id !== updatedItem.id
        ),
    ];

    const newColumns = {
        ...state.columns,
        jobs: {
            ...jobs,
            [updatedItem.statusId]: {
                ...jobs[updatedItem.statusId],
                items: updatedJobsInNewColumn,
            },
            ...(originalStatusId !== updatedItem.statusId && {
                [originalStatusId]: {
                    ...jobs[originalStatusId],
                    items: updatedJobsInOriginalColumn,
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
    const { originalStatusId, updatedItem } =
        payload;
    const notes = state.columns.notes;

    const updatedNotesInOriginalColumn = notes[
        originalStatusId
    ].items.filter((note) => note.id !== updatedItem.id);

    const updatedNotesInNewColumn = [

        payload.updatedItem,
        ...notes[updatedItem.statusId].items.filter(
            (note) => note.id !== updatedItem.id
        ),
    ];

    const newColumns = {
        ...state.columns,
        notes: {
            ...notes,
            [updatedItem.statusId]: {
                ...notes[updatedItem.statusId],
                items: updatedNotesInNewColumn,
            },
            ...(originalStatusId !== updatedItem.statusId && {
                [originalStatusId]: {
                    ...notes[originalStatusId],
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

const SetTags = (state, payload) => {
    const newTags = { ...state.tags, ...payload };
    sessionStorage.setItem("tags", JSON.stringify(newTags));
    return {
        ...state,
        tags: newTags,
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
    AddJob,
    AddNote,
    DeleteProject,
    DeleteJob,
    DeleteNote,
    UpdateProject,
    UpdateJob,
    UpdateNote,
    SetLoading,
    SetError,
    SetTags,
}