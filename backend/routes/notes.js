
import express from 'express'
import NotesController from '../controllers/notes.js'

const router = express.Router()


router.get('/', NotesController.getAllNotes)
router.get('/:note_id', NotesController.getNoteById)
router.post('/', NotesController.createNote)
router.patch('/:note_id', NotesController.updateNote)
router.delete('/:note_id', NotesController.deleteNote)

export default router
