import express from 'express'
import NotesController from '../controllers/notes.js'

const router = express.Router()


router.get('/', NotesController.getAllNotes)
router.get('/:id', NotesController.getNoteById)
router.post('/', NotesController.createNote)
router.patch('/:id', NotesController.updateNote)
router.delete('/:id', NotesController.deleteNote)

export default router
