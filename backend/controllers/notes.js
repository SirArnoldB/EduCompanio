import { pool } from '../config/database.js'

const createNote = async (req, res) => {
  try {
    const { title, content, category_id, status_id } = req.body

    const results = await pool.query(
      `INSERT INTO notes (title, content, category_id, status_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [title, content, category_id, status_id]
    )
    res.status(201).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getAllNotes = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM notes ORDER BY created_at DESC')
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getNoteById = async (req, res) => {
  try {
    const id = req.params.id
    const results = await pool.query('SELECT * FROM notes WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateNote = async (req, res) => {
  try {
    const id = req.params.id
    const { title, content, category_id, status_id } = req.body
    const results = await pool.query(
      `UPDATE notes
      SET title = $1, content = $2, category_id = $3, status_id = $4
      WHERE id = $5
      RETURNING *`,
      [title, content, category_id, status_id, id]
    )
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteNote = async (req, res) => {
  try {
    const id = req.params.id
    const results = await pool.query('DELETE FROM notes WHERE id = $1 RETURNING *', [id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote
}
