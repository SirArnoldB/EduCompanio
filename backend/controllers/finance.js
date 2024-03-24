import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const getAllFinanceResources = async (req, res) => {
    try {
        const financeResourcesSnapshot = await db.collection("finance").get();
        const financeResources = financeResourcesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(financeResources);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getFinanceResourceById = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const financeResourceDoc = await db.collection("finance").doc(resourceId).get();
        if (financeResourceDoc.exists) {
            res.status(200).json({ id: financeResourceDoc.id, ...financeResourceDoc.data() });
        } else {
            res.status(404).json({ error: "Finance resource not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createFinanceResource = async (req, res) => {
    try {
        const { title, description, url, tags } = req.body;
        const financeResourceRef = await db.collection("finance").add({
            title,
            description,
            url,
            tags,
        });
        const financeResourceSnapshot = await financeResourceRef.get();
        res.status(201).json({ id: financeResourceSnapshot.id, ...financeResourceSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateFinanceResource = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const { title, description, url, tags } = req.body;
        const financeResourceDoc = db.collection("finance").doc(resourceId);
        await financeResourceDoc.update({
            title,
            description,
            url,
            tags,
        });
        const updatedFinanceResourceSnapshot = await financeResourceDoc.get();
        res.status(200).json({ id: updatedFinanceResourceSnapshot.id, ...updatedFinanceResourceSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteFinanceResource = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const financeResourceDoc = db.collection("finance").doc(resourceId);
        const financeResourceSnapshot = await financeResourceDoc.get();
        if (financeResourceSnapshot.exists) {
            await financeResourceDoc.delete();
            res.status(200).json({ id: financeResourceSnapshot.id, ...financeResourceSnapshot.data() });
        } else {
            res.status(404).json({ error: "Finance resource not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getAllFinanceResources,
    getFinanceResourceById,
    createFinanceResource,
    updateFinanceResource,
    deleteFinanceResource,
};