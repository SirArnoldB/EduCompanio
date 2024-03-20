import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const getAllOrganizations = async (req, res) => {
    try {
        const organizationsSnapshot = await db.collection("organizations").get();
        const organizations = organizationsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(organizations);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getOrganizationById = async (req, res) => {
    try {
        const organizationId = req.params.id;
        const organizationDoc = await db.collection("organizations").doc(organizationId).get();
        if (organizationDoc.exists) {
            res.status(200).json({ id: organizationDoc.id, ...organizationDoc.data() });
        } else {
            res.status(404).json({ error: "Organization not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createOrganization = async (req, res) => {
    try {
        const { title, description, url, tags } = req.body;
        const organizationRef = await db.collection("organizations").add({
            title,
            description,
            url,
            tags,
        });
        const organizationSnapshot = await organizationRef.get();
        res.status(201).json({ id: organizationSnapshot.id, ...organizationSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateOrganization = async (req, res) => {
    try {
        const organizationId = req.params.id;
        const { title, description, url, tags } = req.body;
        const organizationDoc = db.collection("organizations").doc(organizationId);
        await organizationDoc.update({
            title,
            description,
            url,
            tags,
        });
        const updatedOrganizationSnapshot = await organizationDoc.get();
        res.status(200).json({ id: updatedOrganizationSnapshot.id, ...updatedOrganizationSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteOrganization = async (req, res) => {
    try {
        const organizationId = req.params.id;
        const organizationDoc = db.collection("organizations").doc(organizationId);
        const organizationSnapshot = await organizationDoc.get();
        if (organizationSnapshot.exists) {
            await organizationDoc.delete();
            res.status(200).json({ id: organizationSnapshot.id, ...organizationSnapshot.data() });
        } else {
            res.status(404).json({ error: "Organization not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getAllOrganizations,
    getOrganizationById,
    createOrganization,
    updateOrganization,
    deleteOrganization,
};