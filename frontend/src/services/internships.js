import request from "../utilities/api";

const internshipsUrl = "/api/internships";

const getAllInternships = (token) => request("GET", internshipsUrl, '', { Authorization: `Bearer ${token}` });

const getInternshipById = (id, token) => request("GET", `${internshipsUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

const createInternship = (internship, token) => request("POST", internshipsUrl, internship, { Authorization: `Bearer ${token}` });

const updateInternship = (id, internship, token) => request("PATCH", `${internshipsUrl}/${id}`, internship, { Authorization: `Bearer ${token}` });

const deleteInternship = (id, token) => request("DELETE", `${internshipsUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

export default {
    getAllInternships,
    getInternshipById,
    createInternship,
    updateInternship,
    deleteInternship
};

