
import { pool } from '../config/database.js'

const createProject = async (req, res) => {
  try {
    const { title, content, url, category, status } = req.body

    const results = await pool.query(`
        INSERT INTO projects (title, content, url, category_id, status_id)
        VALUES ($1, $2, $3, (SELECT id FROM project_categories WHERE category = $4), (SELECT id FROM project_statuses WHERE status = $5))
        RETURNING *`,
      [title, content, url, category, status]
    )
    res.status(201).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getAllProjects = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM projects ORDER BY created_at ASC')
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getProjectById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('SELECT * FROM projects WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const updateProject = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { title, content, url, category, status } = req.body
    const results = await pool.query(
      `UPDATE projects
      SET title = $1, content = $2, url = $3, category_id = (SELECT id FROM project_categories WHERE category = $4), status_id = (SELECT id FROM project_statuses WHERE status = $5)
      WHERE id = $4`,
      [title, content, url, category, status, id]
    )
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const deleteProject = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM projects WHERE id = $1', [id])
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
