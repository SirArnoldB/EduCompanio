import request from "../utilities/api";

const notesUrl = "/api/notes";

const getAllNotes = (token) => request("GET", notesUrl, '', { Authorization: `Bearer ${token}` });

const getNoteById = (id, token) => request("GET", `${notesUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

const createNote = (note, token) => request("POST", notesUrl, note, { Authorization: `Bearer ${token}` });

const updateNote = (id, note, token) => request("PATCH", `${notesUrl}/${id}`, note, { Authorization: `Bearer ${token}` });

const deleteNote = (id, token) => request("DELETE", `${notesUrl}/${id}`, '', { Authorization: `Bearer ${token}` });

export default {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};