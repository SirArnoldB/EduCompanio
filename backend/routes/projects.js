
import express from 'express'
import ProjectsController from '../controllers/project.js'

const router = express.Router()

router.get('/', ProjectsController.getAllProjects)
router.get('/:project_id', ProjectsController.getProjectById)
router.post('/', ProjectsController.createProject)
router.patch('/:project_id', ProjectsController.updateProject)
router.delete('/:project_id', ProjectsController.deleteProject)

export default router
