
import { pool } from '../config/database.js'

const createProject = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const user_id = req.user.id
    const { title, content, url, category_id, status_id } = req.body

    const results = await pool.query(`
        INSERT INTO projects (title, content, url, category_id, status_id, user_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
      [title, content, url, category_id, status_id, user_id]
    )
    res.status(201).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getAllProjects = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const user_id = req.user.id
    const results = await pool.query('SELECT * FROM projects WHERE user_id = $1 ORDER BY updated_at DESC', [user_id])
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getProjectById = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const user_id = req.user.id
    const id = req.params.id
    const results = await pool.query('SELECT * FROM projects WHERE id = $1 AND user_id = $2', [id, user_id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateProject = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const user_id = req.user.id
    const id = req.params.id
    const { title, content, url, category_id, status_id } = req.body
    const results = await pool.query(
      `UPDATE projects
      SET title = $1, content = $2, url = $3, category_id = $4, status_id = $5
      WHERE id = $6 AND user_id = $7
      RETURNING *`,
      [title, content, url, category_id, status_id, id, user_id]
    )
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteProject = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const user_id = req.user.id
    const id = req.params.id
    const results = await pool.query('DELETE FROM projects WHERE id = $1 AND user_id = $2 RETURNING *', [id, user_id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
}
