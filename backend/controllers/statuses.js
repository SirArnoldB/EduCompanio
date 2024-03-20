import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

// Function to get all statuses for a collection
const getAllStatuses = async (collectionName, orderField, orderMap) => {
    try {
        const statusesSnapshot = await db.collection(collectionName).get();
        const statuses = statusesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Apply custom order based on orderField
        return statuses.sort((a, b) => {
            const orderA = orderMap[a[orderField]] || Infinity;
            const orderB = orderMap[b[orderField]] || Infinity;
            return orderA - orderB;
        });
    } catch (error) {
        console.error(`Error fetching statuses from ${collectionName}:`, error);
        throw new Error(`Failed to retrieve statuses from ${collectionName}`);
    }
}

// Job Statuses
const getAllJobStatuses = async (req, res) => {
    const orderField = "status";
    const orderMap = {
        Applied: 1,
        Screen: 2,
        Interviewing: 3,
        Offer: 4,
        Rejected: 5,
    };

    try {
        const statuses = await getAllStatuses("jobStatuses", orderField, orderMap);
        res.status(200).json(statuses);
    } catch (error) {
        console.error("Error fetching job statuses:", error.message);
        res.status(500).json({ error: error.message });
    }
};

const getAllNoteStatuses = async (req, res) => {
    const orderField = "status";
    const orderMap = {
        Draft: 1,
        Final: 2,
        Important: 3,
        Archived: 4,
    };

    try {
        const statuses = await getAllStatuses("noteStatuses", orderField, orderMap);
        res.status(200).json(statuses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllProjectStatuses = async (req, res) => {
    const orderField = "status";
    const orderMap = {
        Idea: 1,
        Planning: 2,
        "In Progress": 3,
        Completed: 4,
        "On Hold": 5,
        Canceled: 6,
    };

    try {
        const statuses = await getAllStatuses("projectStatuses", orderField, orderMap);
        res.status(200).json(statuses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getAllJobStatuses,
    getAllNoteStatuses,
    getAllProjectStatuses,
};