import request from "../utilities/api";

const notesUrl = "/api/notes";

const getAllNotes = (user_id) => request("GET", `${notesUrl}/${user_id}`, '');

const getNoteById = (id, user_id) => request("GET", `${notesUrl}/${user_id}/${id}`, '');

const createNote = (note, user_id) => request("POST", `${notesUrl}/${user_id}`, note);

const updateNote = (id, note, user_id) => request("PATCH", `${notesUrl}/${user_id}/${id}`, note);

const deleteNote = (id, user_id) => request("DELETE", `${notesUrl}/${user_id}/${id}`, '');

export default {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};