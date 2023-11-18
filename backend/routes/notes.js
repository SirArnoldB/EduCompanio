
import express from 'express'
import NotesController from '../controllers/notes.js'

const router = express.Router()


router.get('/:user_id', NotesController.getAllNotes)
router.get('/:user_id/:id', NotesController.getNoteById)
router.post('/:user_id', NotesController.createNote)
router.patch('/:user_id/:id', NotesController.updateNote)
router.delete('/:user_id/:id', NotesController.deleteNote)

export default router
