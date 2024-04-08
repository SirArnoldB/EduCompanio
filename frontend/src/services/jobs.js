import request from "../utilities/api";

const jobsUrl = "/api/jobs";

const getAllJobs = (token) => request("GET", `${jobsUrl}`, '', { Authorization: `Bearer ${token}` });

const getJobById = (id, token) => request("GET", `${jobsUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

const createJob = (job, token) => request("POST", `${jobsUrl}`, job, { Authorization: `Bearer ${token}` });

const updateJob = (id, job, token) => request("PATCH", `${jobsUrl}/${id}`, job, { Authorization: `Bearer ${token}` });

const deleteJob = (id, token) => request("DELETE", `${jobsUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

export default {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
};

