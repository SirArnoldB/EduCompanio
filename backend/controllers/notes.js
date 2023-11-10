import { pool } from '../config/database.js'

const createNote = async (req, res) => {
  try {
    const { title, content, category, status } = req.body

    const results = await pool.query(
      `INSERT INTO notes (title, content, category_id, status_id)
      VALUES ($1, $2, (SELECT id FROM note_categories WHERE category = $3), (SELECT id FROM note_statuses WHERE status = $4))
      RETURNING *`,
      [title, content, category, status]
    )
    res.status(201).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getAllNotes = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM notes ORDER BY created_at ASC')
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getNoteById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('SELECT * FROM notes WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateNote = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { title, content, category, status } = req.body
    const results = await pool.query(
      `UPDATE notes
      SET title = $1, content = $2, category_id = (SELECT id FROM note_categories WHERE category = $3), status_id = (SELECT id FROM note_statuses WHERE status = $4)
      WHERE id = $4`,
      [title, content, category, status, id]
    )
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteNote = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM notes WHERE id = $1', [id])
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
