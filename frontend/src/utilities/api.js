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
    try {
        const config = {
            method,
            url,
            headers: { 'Content-Type': 'application/json', ...headers },
        };
        if (body !== '') {
            config.data = body;
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw new ApiError('⛔️ API Error: ', error.message);
    }
}

export default request;