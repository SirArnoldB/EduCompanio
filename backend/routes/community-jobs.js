import express from 'express';
import communityJobsController from '../controllers/community-jobs.js';

const router = express.Router();

router.get('/', communityJobsController.getAllCommunityJobs);
router.get('/:id', communityJobsController.getCommunityJobById);
router.post('/', communityJobsController.createCommunityJob);
router.patch('/:id', communityJobsController.updateCommunityJob);
router.delete('/:id', communityJobsController.deleteCommunityJob);

export default router;