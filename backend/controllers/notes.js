import { pool } from '../config/database.js'

const createNote = async (req, res) => {
  try {
    const { title, content, category } = req.body

    const results = await pool.query(
      `INSERT INTO notes (title, content, category)
      VALUES($1, $2, $3) 
      RETURNING *`,
      [title, content, category]
    )
    res.status(201).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getAllNotes = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM notes ORDER BY note_id ASC')
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getNoteById = async (req, res) => {
  try {
    const note_id = parseInt(req.params.note_id)
    const results = await pool.query('SELECT * FROM notes WHERE note_id = $1', [note_id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateNote = async (req, res) => {
  try {
    const note_id = parseInt(req.params.note_id)
    const { title, content,category } = req.body
    const results = await pool.query(
      `UPDATE notes
      SET title = $1, content = $2, category = $3
      WHERE note_id = $4`, 
      [title, content, category, note_id]
    )
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteNote = async (req, res) => {
  try {
    const note_id = parseInt(req.params.note_id)
    const results = await pool.query('DELETE FROM notes WHERE note_id = $1', [note_id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote
}
