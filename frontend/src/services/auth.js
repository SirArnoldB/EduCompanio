import request from "../utilities/api";

const authUrl = "/api/auth";

const githubLogin = () => request("GET", `${authUrl}/github`);

// const githubCallback = () => request("GET", `${authUrl}/github/callback`);

const loginSuccess = () => request("GET", `${authUrl}/login/success`);

// const loginFailed = () => request("GET", `${authUrl}/login/failed`);

const logout = () => request("GET", `${authUrl}/logout`);

export default {
    githubLogin,
    loginSuccess,
    logout
}