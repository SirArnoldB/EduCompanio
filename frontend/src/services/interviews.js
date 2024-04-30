import request from "../utilities/api";

const interviewsUrl = "/api/interviews";

const createMockAIInterview = (formData, token) => request("POST", `${interviewsUrl}/mock-ai-interview`, formData, { Authorization: `Bearer ${token}` });
const conductInterview = (interviewDetails, token) => request("POST", `${interviewsUrl}/mock-ai-interview/conduct`, interviewDetails, { Authorization: `Bearer ${token}` });
const scheduleMockInterview = (formData) => request("POST", `${interviewsUrl}/mock-interview`, formData);
const getPastPracticeSessions = () => request("GET", `${interviewsUrl}/past-practice-sessions`);
const getMockAIInterviews = () => request("GET", `${interviewsUrl}/mock-ai-interviews`);
const getMockInterviews = () => request("GET", `${interviewsUrl}/mock-interviews`);
const getMockAiInterview = (id) => request("GET", `${interviewsUrl}/mock-ai-interview/${id}`);

export default {
    createMockAIInterview,
    scheduleMockInterview,
    getPastPracticeSessions,
    getMockAIInterviews,
    getMockInterviews,
    getMockAiInterview,
    conductInterview
};

