import express from 'express';
import categoriesController from '../controllers/categories.js';

const router = express.Router();

router.get('/internships', categoriesController.getAllInternshipCategories);
router.get('/notes', categoriesController.getAllNoteCategories);
router.get('/projects', categoriesController.getAllProjectCategories);

export default router;