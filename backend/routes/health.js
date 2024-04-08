import express from 'express';
import healthResourcesController from '../controllers/health.js';

const router = express.Router();

router.get('/', healthResourcesController.getAllHealthResources);
router.get('/:id', healthResourcesController.getHealthResourceById);
router.post('/', healthResourcesController.createHealthResource);
router.patch('/:id', healthResourcesController.updateHealthResource);
router.delete('/:id', healthResourcesController.deleteHealthResource);

export default router;
