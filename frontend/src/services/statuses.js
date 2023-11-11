import request from "../utilities/api";

const statusesUrl = "/api/statuses";

const getAllInternshipStatuses = () => request("GET", `${statusesUrl}/internships`);

const getAllNoteStatuses = () => request("GET", `${statusesUrl}/notes`);

const getAllProjectStatuses = () => request("GET", `${statusesUrl}/projects`);

export default {
    getAllInternshipStatuses,
    getAllNoteStatuses,
    getAllProjectStatuses
    };