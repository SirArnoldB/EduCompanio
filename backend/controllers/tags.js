import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

// Function to get all tags for a collection
const getTags = async (collectionName, req, res) => {
    try {
        const tagsSnapshot = await db.collection(collectionName).get();
        const tags = tagsSnapshot.docs.map(doc => doc.data());
        res.status(200).json(tags);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

// Organization Tags
const getAllOrganizationTags = async (req, res) => {
    await getTags('organizationTags', req, res);
};

// Skill Tags
const getAllSkillTags = async (req, res) => {
    await getTags('skillTags', req, res);
};

// Community Job Tags
const getAllCommunityJobTags = async (req, res) => {
    await getTags('communityJobTags', req, res);
};

// Community Project Tags
const getAllCommunityProjectTags = async (req, res) => {
    await getTags('communityProjectTags', req, res);
};

// Health Tags
const getAllHealthTags = async (req, res) => {
    await getTags('healthTags', req, res);
};

// Finance Tags
const getAllFinanceTags = async (req, res) => {
    await getTags('financeTags', req, res);
};

export default {
    getAllOrganizationTags,
    getAllSkillTags,
    getAllCommunityJobTags,
    getAllCommunityProjectTags,
    getAllHealthTags,
    getAllFinanceTags
};