import express from 'express';
import communityProjectsController from '../controllers/community-projects.js';

const router = express.Router();

router.get('/', communityProjectsController.getAllCommunityProjects);
router.get('/:id', communityProjectsController.getCommunityProjectById);
router.post('/', communityProjectsController.createCommunityProject);
router.patch('/:id', communityProjectsController.updateCommunityProject);
router.delete('/:id', communityProjectsController.deleteCommunityProject);

export default router;