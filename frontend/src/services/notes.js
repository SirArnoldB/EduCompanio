import request from "../utilities/api";

const notesUrl = "/api/notes";

const getAllNotes = () => request("GET", notesUrl);

const getNoteById = (id) => request("GET", `${notesUrl}/${id}`);

const createNote = (note) => request("POST", notesUrl, note);

const updateNote = (id, note) => request("PATCH", `${notesUrl}/${id}`, note);

const deleteNote = (id) => request("DELETE", `${notesUrl}/${id}`);

export default {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};