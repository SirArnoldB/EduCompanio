
import express from 'express'
import ProjectsController from '../controllers/project.js'

const router = express.Router()

router.get('/:user_id', ProjectsController.getAllProjects)
router.get('/:user_id/:id', ProjectsController.getProjectById)
router.post('/:user_id', ProjectsController.createProject)
router.patch('/:user_id/:id', ProjectsController.updateProject)
router.delete('/:user_id/:id', ProjectsController.deleteProject)

export default router
