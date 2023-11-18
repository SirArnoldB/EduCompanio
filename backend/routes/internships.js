
import express from 'express'
import InternshipsController from '../controllers/internship.js'

const router = express.Router()

router.get('/:user_id', InternshipsController.getAllInternships)
router.get('/:user_id/:id', InternshipsController.getInternshipById)
router.post('/:user_id', InternshipsController.createInternship)
router.patch('/:user_id/:id', InternshipsController.updateInternship)
router.delete('/:user_id/:id', InternshipsController.deleteInternship)

export default router
