import express from 'express';
import organizationsController from '../controllers/organizations.js';

const router = express.Router();

router.get('/', organizationsController.getAllOrganizations);
router.get('/:id', organizationsController.getOrganizationById);
router.post('/', organizationsController.createOrganization);
router.patch('/:id', organizationsController.updateOrganization);
router.delete('/:id', organizationsController.deleteOrganization);

export default router;
