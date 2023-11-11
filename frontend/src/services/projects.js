import request from "../utilities/api";

const projectsUrl = "/api/projects";

const getAllProjects = () => request("GET", projectsUrl);

const getProjectById = (id) => request("GET", `${projectsUrl}/${id}`);

const createProject = (project) => request("POST", projectsUrl, project);

const updateProject = (id, project) => request("PATCH", `${projectsUrl}/${id}`, project);

const deleteProject = (id) => request("DELETE", `${projectsUrl}/${id}`);

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};