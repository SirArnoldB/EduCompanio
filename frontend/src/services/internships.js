import request from "../utilities/api";

const internshipsUrl = "/api/internships";

const getAllInternships = (user_id) => request("GET", `${internshipsUrl}/${user_id}`, '');

const getInternshipById = (id, user_id) => request("GET", `${internshipsUrl}/${user_id}/${id}`, '');

const createInternship = (internship, user_id) => request("POST", `${internshipsUrl}/${user_id}`, internship);

const updateInternship = (id, internship, user_id) => request("PATCH", `${internshipsUrl}/${user_id}/${id}`, internship);

const deleteInternship = (id, user_id) => request("DELETE", `${internshipsUrl}/${user_id}/${id}`, '');

export default {
    getAllInternships,
    getInternshipById,
    createInternship,
    updateInternship,
    deleteInternship
};

