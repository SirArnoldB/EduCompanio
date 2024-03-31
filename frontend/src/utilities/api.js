import axios from 'axios';

class ApiError extends Error {
    constructor(message, details) {
        super(message);
        this.name = 'API' + this.name;
        this.details = details;
    }
}

/**
 * Makes an HTTP request using the axios library.
 * @param {string} method - The HTTP method to use (e.g. GET, POST, PUT, DELETE).
 * @param {string} url - The URL to send the request to.
 * @param {Object} [body=null] - The request body to send (optional).
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {ApiError} - If the API returns an error response.
 */
const request = async (method, url, body = '', headers = {}) => {
    const API_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;
    try {
        const config = {
            method,
            url: `${API_URL}${url}`,
            headers: { 'Content-Type': 'application/json', ...headers },
        };
        if (body !== '') {
            config.data = body;
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        const msg = error.response.data.message;
        throw new ApiError(`⛔️ API Error: ${msg}`);
    }
}

export default request;