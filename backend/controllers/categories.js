import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();


// Function to get all categories for a collection
const getCategories = async (collectionName, req, res) => {
    try {
        const categoriesSnapshot = await db.collection(collectionName).get();
        const categories = categoriesSnapshot.docs.map(doc => doc.data());
        res.status(200).json(categories);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

// Job Categories
const getAllJobCategories = async (req, res) => {
    await getCategories('jobCategories', req, res);
}

// Notes Categories
const getAllNoteCategories = async (req, res) => {
    await getCategories('noteCategories', req, res);
}

// Project Categories
const getAllProjectCategories = async (req, res) => {
    await getCategories('projectCategories', req, res);
}

export default {
    getAllJobCategories, getAllNoteCategories, getAllProjectCategories
}