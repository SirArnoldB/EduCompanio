import request from "../utilities/api";

const projectsUrl = "/api/projects";

const getAllProjects = (user_id) => request("GET", `${projectsUrl}/${user_id}`, '');

const getProjectById = (id, user_id) => request("GET", `${projectsUrl}/${user_id}/${id}`, '');

const createProject = (project, user_id) => request("POST", `${projectsUrl}/${user_id}`, project);

const updateProject = (id, project, user_id) => request("PATCH", `${projectsUrl}/${user_id}/${id}`, project);

const deleteProject = (id, user_id) => request("DELETE", `${projectsUrl}/${user_id}/${id}`, '');

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};