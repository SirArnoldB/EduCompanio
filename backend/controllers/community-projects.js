import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const getAllCommunityProjects = async (req, res) => {
    try {
        const communityProjectsSnapshot = await db.collection("communityProjects").get();
        const communityProjects = communityProjectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(communityProjects);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getCommunityProjectById = async (req, res) => {
    try {
        const projectId = req.params.id;
        const projectDoc = await db.collection("communityProjects").doc(projectId).get();
        if (projectDoc.exists) {
            res.status(200).json({ id: projectDoc.id, ...projectDoc.data() });
        } else {
            res.status(404).json({ error: "Community Project not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createCommunityProject = async (req, res) => {
    try {
        const { user, title, description, tags, likes, interested, contact, interestDeadline } = req.body;
        const communityProjectRef = await db.collection("communityProjects").add({
            user,
            title,
            description,
            tags,
            likes: likes || 0,
            interested: interested || 0,
            contact,
            interestDeadline: interestDeadline ? new Date(interestDeadline) : null,
        });
        const communityProjectSnapshot = await communityProjectRef.get();
        res.status(201).json({ id: communityProjectSnapshot.id, ...communityProjectSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateCommunityProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const { user, title, description, tags, likes, interested, contact, interestDeadline } = req.body;
        const projectDoc = db.collection("communityProjects").doc(projectId);
        const projectSnapshot = await projectDoc.get();
        if (projectSnapshot.exists && projectSnapshot.data().user === user) {
            await projectDoc.update({
                title,
                description,
                tags,
                likes,
                interested,
                contact,
                interestDeadline: interestDeadline ? new Date(interestDeadline) : null,
            });
            const updatedProjectSnapshot = await projectDoc.get();
            res.status(200).json({ id: updatedProjectSnapshot.id, ...updatedProjectSnapshot.data() });
        } else {
            res.status(404).json({ error: "Community Project not found or insufficient permissions" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteCommunityProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const projectDoc = db.collection("communityProjects").doc(projectId);
        const projectSnapshot = await projectDoc.get();
        if (projectSnapshot.exists) {
            await projectDoc.delete();
            res.status(200).json({ id: projectSnapshot.id, ...projectSnapshot.data() });
        } else {
            res.status(404).json({ error: "Community Project not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getAllCommunityProjects,
    getCommunityProjectById,
    createCommunityProject,
    updateCommunityProject,
    deleteCommunityProject,
};