// statusesRouter.js
import express from 'express';
import statusesController from '../controllers/statuses.js';

const router = express.Router();

router.get('/jobs', statusesController.getAllJobStatuses);
router.get('/notes', statusesController.getAllNoteStatuses);
router.get('/projects', statusesController.getAllProjectStatuses);

export default router;