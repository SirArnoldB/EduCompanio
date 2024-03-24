import request from "../utilities/api";

const statusesUrl = "/api/statuses";

const getAllJobStatuses = () => request("GET", `${statusesUrl}/jobs`);

const getAllNoteStatuses = () => request("GET", `${statusesUrl}/notes`);

const getAllProjectStatuses = () => request("GET", `${statusesUrl}/projects`);

export default {
    getAllJobStatuses,
    getAllNoteStatuses,
    getAllProjectStatuses
};