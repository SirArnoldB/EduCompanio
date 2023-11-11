import request from "../utilities/api";

const internshipsUrl = "/api/internships";

const getAllInternships = () => request("GET", internshipsUrl);

const getInternshipById = (id) => request("GET", `${internshipsUrl}/${id}`);

const createInternship = (internship) => request("POST", internshipsUrl, internship);

const updateInternship = (id, internship) => request("PATCH", `${internshipsUrl}/${id}`, internship);

const deleteInternship = (id) => request("DELETE", `${internshipsUrl}/${id}`);

export default {
    getAllInternships,
    getInternshipById,
    createInternship,
    updateInternship,
    deleteInternship
};

