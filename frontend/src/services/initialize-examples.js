import request from "../utilities/api";

const initializeExamples = (token) => request("GET", "/api/initialize/examples", '', { Authorization: `Bearer ${token}` });

export { initializeExamples }