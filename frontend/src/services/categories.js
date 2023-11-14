import request from "../utilities/api";

const categoriesUrl = "/api/categories";

const getAllInternshipCategories = () => request("GET", `${categoriesUrl}/internships`);

const getAllNoteCategories = () => request("GET", `${categoriesUrl}/notes`);

const getAllProjectCategories = () => request("GET", `${categoriesUrl}/projects`);

export default {
    getAllInternshipCategories,
    getAllNoteCategories,
    getAllProjectCategories
};