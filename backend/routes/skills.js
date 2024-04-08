import express from 'express';
import skillsController from '../controllers/skills.js';

const router = express.Router();

router.get('/', skillsController.getAllSkills);
router.get('/:id', skillsController.getSkillById);
router.post('/', skillsController.createSkill);
router.patch('/:id', skillsController.updateSkill);
router.delete('/:id', skillsController.deleteSkill);

export default router;
