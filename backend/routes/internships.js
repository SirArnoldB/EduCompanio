
import express from 'express'
import InternshipsController from '../controllers/internship.js'

const router = express.Router()

router.get('/', InternshipsController.getAllInternships)
router.get('/:internship_id', InternshipsController.getInternshipById)
router.post('/', InternshipsController.createInternship)
router.patch('/:internship_id', InternshipsController.updateInternship)
router.delete('/:internship_id', InternshipsController.deleteInternship)

export default router
