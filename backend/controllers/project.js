
import { pool } from '../config/database.js'

const createProject = async (req, res) => {
  try {
    const { name, description, status } = req.body

    const results = await pool.query(
      `INSERT INTO projects (name, description, status)
      VALUES($1, $2, $3) 
      RETURNING *`,
      [name, description, status]
    )
    res.status(201).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getAllProjects = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM projects ORDER BY project_id ASC')
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getProjectById = async (req, res) => {
  try {
    const project_id = parseInt(req.params.project_id)
    const results = await pool.query('SELECT * FROM projects WHERE project_id = $1', [project_id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateProject = async (req, res) => {
  try {
    const project_id = parseInt(req.params.project_id)
    const { name, description, status } = req.body
    const results = await pool.query(
      `UPDATE projects
      SET name = $1, description = $2, status = $3
      WHERE project_id = $4`, 
      [name, description, status, project_id]
    )
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteProject = async (req, res) => {
  try {
    const project_id = parseInt(req.params.project_id)
    const results = await pool.query('DELETE FROM projects WHERE project_id = $1', [project_id])
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
}
