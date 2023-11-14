
import express from 'express'
import ProjectsController from '../controllers/project.js'

const router = express.Router()

router.get('/', ProjectsController.getAllProjects)
router.get('/:id', ProjectsController.getProjectById)
router.post('/', ProjectsController.createProject)
router.patch('/:id', ProjectsController.updateProject)
router.delete('/:id', ProjectsController.deleteProject)

export default router
