import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const createJob = async (req, res) => {
    try {
        const { company, position, content, url, categoryId, statusId } = req.body;
        const userId = req.user.uid;
        const jobRef = await db.collection("jobs").add({
            userId,
            company,
            position,
            content,
            url,
            categoryId,
            statusId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const jobSnapshot = await jobRef.get();
        res.status(201).json({ id: jobSnapshot.id, ...jobSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getAllJobs = async (req, res) => {
    try {
        const userId = req.user.uid;
        const jobsSnapshot = await db
            .collection("jobs")
            .where("userId", "==", userId)
            .orderBy("createdAt", "desc")
            .get();
        const jobs = jobsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(jobs);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getJobById = async (req, res) => {
    try {
        const userId = req.user.uid;
        const jobId = req.params.id;
        const jobDoc = await db.collection("jobs").doc(jobId).get();
        if (jobDoc.exists && jobDoc.data().userId === userId) {
            res.status(200).json({ id: jobDoc.id, ...jobDoc.data() });
        } else {
            res.status(404).json({ error: "Job not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateJob = async (req, res) => {
    try {
        const userId = req.user.uid;
        const jobId = req.params.id;
        const { company, position, content, url, categoryId, statusId } = req.body;
        const jobDoc = db.collection("jobs").doc(jobId);
        const jobSnapshot = await jobDoc.get();
        if (jobSnapshot.exists && jobSnapshot.data().userId === userId) {
            await jobDoc.update({
                company,
                position,
                content,
                url,
                categoryId,
                statusId,
                updatedAt: new Date(),
            });
            const updatedJobSnapshot = await jobDoc.get();
            res.status(200).json({ id: updatedJobSnapshot.id, ...updatedJobSnapshot.data() });
        } else {
            res.status(404).json({ error: "Job not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteJob = async (req, res) => {
    try {
        const userId = req.user.uid;
        const jobId = req.params.id;
        const jobDoc = db.collection("jobs").doc(jobId);
        const jobSnapshot = await jobDoc.get();
        if (jobSnapshot.exists && jobSnapshot.data().userId === userId) {
            await jobDoc.delete();
            res.status(200).json({ id: jobSnapshot.id, ...jobSnapshot.data() });
        } else {
            res.status(404).json({ error: "Job not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
};