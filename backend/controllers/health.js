import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const getAllHealthResources = async (req, res) => {
    try {
        const healthResourcesSnapshot = await db.collection("health").get();
        const healthResources = healthResourcesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(healthResources);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getHealthResourceById = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const healthResourceDoc = await db.collection("health").doc(resourceId).get();
        if (healthResourceDoc.exists) {
            res.status(200).json({ id: healthResourceDoc.id, ...healthResourceDoc.data() });
        } else {
            res.status(404).json({ error: "Health resource not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createHealthResource = async (req, res) => {
    try {
        const { title, description, url, tags } = req.body;
        const healthResourceRef = await db.collection("health").add({
            title,
            description,
            url,
            tags,
        });
        const healthResourceSnapshot = await healthResourceRef.get();
        res.status(201).json({ id: healthResourceSnapshot.id, ...healthResourceSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateHealthResource = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const { title, description, url, tags } = req.body;
        const healthResourceDoc = db.collection("health").doc(resourceId);
        await healthResourceDoc.update({
            title,
            description,
            url,
            tags,
        });
        const updatedHealthResourceSnapshot = await healthResourceDoc.get();
        res.status(200).json({ id: updatedHealthResourceSnapshot.id, ...updatedHealthResourceSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteHealthResource = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const healthResourceDoc = db.collection("health").doc(resourceId);
        const healthResourceSnapshot = await healthResourceDoc.get();
        if (healthResourceSnapshot.exists) {
            await healthResourceDoc.delete();
            res.status(200).json({ id: healthResourceSnapshot.id, ...healthResourceSnapshot.data() });
        } else {
            res.status(404).json({ error: "Health resource not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getAllHealthResources,
    getHealthResourceById,
    createHealthResource,
    updateHealthResource,
    deleteHealthResource,
};