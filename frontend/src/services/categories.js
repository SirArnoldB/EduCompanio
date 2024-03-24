import request from "../utilities/api";

const categoriesUrl = "/api/categories";

const getAllJobCategories = () => request("GET", `${categoriesUrl}/jobs`);

const getAllNoteCategories = () => request("GET", `${categoriesUrl}/notes`);

const getAllProjectCategories = () => request("GET", `${categoriesUrl}/projects`);

export default {
    getAllJobCategories,
    getAllNoteCategories,
    getAllProjectCategories
};