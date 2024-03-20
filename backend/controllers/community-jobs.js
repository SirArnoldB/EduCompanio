import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const getAllCommunityJobs = async (req, res) => {
    try {
        const communityJobsSnapshot = await db.collection("communityJobs").get();
        const communityJobs = communityJobsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(communityJobs);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getCommunityJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const jobDoc = await db.collection("communityJobs").doc(jobId).get();
        if (jobDoc.exists) {
            res.status(200).json({ id: jobDoc.id, ...jobDoc.data() });
        } else {
            res.status(404).json({ error: "Community Job not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createCommunityJob = async (req, res) => {
    try {
        const { user, company, title, description, tags, location, url, deadline } = req.body;
        const communityJobRef = await db.collection("communityJobs").add({
            user,
            company,
            title,
            description,
            tags,
            location,
            url,
            deadline,
        });
        const communityJobSnapshot = await communityJobRef.get();
        res.status(201).json({ id: communityJobSnapshot.id, ...communityJobSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateCommunityJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const { user, company, title, description, tags, location, url, deadline } = req.body;
        const jobDoc = db.collection("communityJobs").doc(jobId);
        const jobSnapshot = await jobDoc.get();
        if (jobSnapshot.exists && jobSnapshot.data().user === user) {
            await jobDoc.update({
                company,
                title,
                description,
                tags,
                location,
                url,
                deadline,
            });
            const updatedJobSnapshot = await jobDoc.get();
            res.status(200).json({ id: updatedJobSnapshot.id, ...updatedJobSnapshot.data() });
        } else {
            res.status(404).json({ error: "Community Job not found or insufficient permissions" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};


const deleteCommunityJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const jobDoc = db.collection("communityJobs").doc(jobId);
        const jobSnapshot = await jobDoc.get();
        if (jobSnapshot.exists) {
            await jobDoc.delete();
            res.status(200).json({ id: jobSnapshot.id, ...jobSnapshot.data() });
        } else {
            res.status(404).json({ error: "Community Job not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getAllCommunityJobs,
    getCommunityJobById,
    createCommunityJob,
    updateCommunityJob,
    deleteCommunityJob,
};