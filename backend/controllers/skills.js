import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const getAllSkills = async (req, res) => {
    try {
        const skillsSnapshot = await db.collection("skills").get();
        const skills = skillsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(skills);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getSkillById = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const skillDoc = await db.collection("skills").doc(resourceId).get();
        if (skillDoc.exists) {
            res.status(200).json({ id: skillDoc.id, ...skillDoc.data() });
        } else {
            res.status(404).json({ error: "Skill not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const createSkill = async (req, res) => {
    try {
        const { title, description, url, tags } = req.body;
        const skillRef = await db.collection("skills").add({
            title,
            description,
            url,
            tags,
        });
        const skillSnapshot = await skillRef.get();
        res.status(201).json({ id: skillSnapshot.id, ...skillSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateSkill = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const { title, description, url, tags } = req.body;
        const skillDoc = db.collection("skills").doc(resourceId);
        await skillDoc.update({
            title,
            description,
            url,
            tags,
        });
        const updatedSkillSnapshot = await skillDoc.get();
        res.status(200).json({ id: updatedSkillSnapshot.id, ...updatedSkillSnapshot.data() });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteSkill = async (req, res) => {
    try {
        const resourceId = req.params.id;
        const skillDoc = db.collection("skills").doc(resourceId);
        const skillSnapshot = await skillDoc.get();
        if (skillSnapshot.exists) {
            await skillDoc.delete();
            res.status(200).json({ id: skillSnapshot.id, ...skillSnapshot.data() });
        } else {
            res.status(404).json({ error: "Skill not found" });
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill,
};