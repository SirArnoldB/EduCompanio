import request from "../utilities/api";

const projectsUrl = "/api/projects";

const getAllProjects = (token) => request("GET", `${projectsUrl}`, '', { Authorization: `Bearer ${token}` });

const getProjectById = (id, token) => request("GET", `${projectsUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

const createProject = (project, token) => request("POST", `${projectsUrl}`, project, { Authorization: `Bearer ${token}` });

const updateProject = (id, project, token) => request("PATCH", `${projectsUrl}/${id}`, project, { Authorization: `Bearer ${token}` });

const deleteProject = (id, token) => request("DELETE", `${projectsUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};