import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const createNote = async (req, res) => {
  try {
    const { title, content, categoryId, statusId } = req.body;
    const userId = req.user.uid;
    const noteRef = await db.collection("notes").add({
      userId,
      title,
      content,
      categoryId,
      statusId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const noteSnapshot = await noteRef.get();
    res.status(201).json({ id: noteSnapshot.id, ...noteSnapshot.data() });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const userId = req.user.uid;
    const notesSnapshot = await db
      .collection("notes")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();
    const notes = notesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(notes);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const userId = req.user.uid;
    const noteId = req.params.id;
    const noteDoc = await db.collection("notes").doc(noteId).get();
    if (noteDoc.exists && noteDoc.data().userId === userId) {
      res.status(200).json({ id: noteDoc.id, ...noteDoc.data() });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const userId = req.user.uid;
    const noteId = req.params.id;
    const { title, content, categoryId, statusId } = req.body;
    const noteDoc = db.collection("notes").doc(noteId);
    const noteSnapshot = await noteDoc.get();
    if (noteSnapshot.exists && noteSnapshot.data().userId === userId) {
      await noteDoc.update({
        title,
        content,
        categoryId,
        statusId,
        updatedAt: new Date(),
      });
      const updatedNoteSnapshot = await noteDoc.get();
      res.status(200).json({ id: updatedNoteSnapshot.id, ...updatedNoteSnapshot.data() });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const userId = req.user.uid;
    const noteId = req.params.id;
    const noteDoc = db.collection("notes").doc(noteId);
    const noteSnapshot = await noteDoc.get();
    if (noteSnapshot.exists && noteSnapshot.data().userId === userId) {
      await noteDoc.delete();
      res.status(200).json({ id: noteSnapshot.id, ...noteSnapshot.data() });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};