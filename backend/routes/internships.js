
import express from 'express'
import InternshipsController from '../controllers/internship.js'

const router = express.Router()

router.get('/', InternshipsController.getAllInternships)
router.get('/:id', InternshipsController.getInternshipById)
router.post('/', InternshipsController.createInternship)
router.patch('/:id', InternshipsController.updateInternship)
router.delete('/:id', InternshipsController.deleteInternship)

export default router
