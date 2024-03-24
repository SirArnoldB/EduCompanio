import express from 'express';
import categoriesController from '../controllers/categories.js';

const router = express.Router();

router.get('/jobs', categoriesController.getAllJobCategories);
router.get('/notes', categoriesController.getAllNoteCategories);
router.get('/projects', categoriesController.getAllProjectCategories);

export default router;