import express from 'express';
import tagsController from '../controllers/tags.js';

const router = express.Router();

router.get('/organizations', tagsController.getAllOrganizationTags);
router.get('/skills', tagsController.getAllSkillTags);
router.get('/communityjobs', tagsController.getAllCommunityJobTags);
router.get('/communityprojects', tagsController.getAllCommunityProjectTags);
router.get('/health', tagsController.getAllHealthTags);
router.get('/finance', tagsController.getAllFinanceTags);

export default router;