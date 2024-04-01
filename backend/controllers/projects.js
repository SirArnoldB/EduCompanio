import { app } from "../firebase/admin.js";

// Firestore instance
const db = app.firestore();

const createProject = async (req, res) => {
  try {
    const { title, content, url, categoryId, statusId } = req.body;
    const userId = req.user.uid;
    const projectRef = await db.collection("projects").add({
      userId,
      title,
      content,
      url,
      categoryId,
      statusId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const projectSnapshot = await projectRef.get();
    res.status(201).json({ id: projectSnapshot.id, ...projectSnapshot.data() });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const userId = req.user.uid;
    const projectsSnapshot = await db
      .collection("projects")
      .where("userId", "==", userId)
      .orderBy("updatedAt", "desc")
      .get();
    const projects = projectsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(projects);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const userId = req.user.uid;
    const projectId = req.params.id;
    const projectDoc = await db.collection("projects").doc(projectId).get();
    if (projectDoc.exists && projectDoc.data().userId === userId) {
      res.status(200).json({ id: projectDoc.id, ...projectDoc.data() });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const userId = req.user.uid;
    const projectId = req.params.id;
    const { title, content, url, categoryId, statusId } = req.body;
    const projectDoc = db.collection("projects").doc(projectId);
    const projectSnapshot = await projectDoc.get();
    if (projectSnapshot.exists && projectSnapshot.data().userId === userId) {
      await projectDoc.update({
        title,
        content,
        url,
        categoryId,
        statusId,
        updatedAt: new Date(),
      });
      const updatedProjectSnapshot = await projectDoc.get();
      res.status(200).json({ id: updatedProjectSnapshot.id, ...updatedProjectSnapshot.data() });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const userId = req.user.uid;
    const projectId = req.params.id;
    const projectDoc = db.collection("projects").doc(projectId);
    const projectSnapshot = await projectDoc.get();
    if (projectSnapshot.exists && projectSnapshot.data().userId === userId) {
      await projectDoc.delete();
      res.status(200).json({ id: projectSnapshot.id, ...projectSnapshot.data() });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};