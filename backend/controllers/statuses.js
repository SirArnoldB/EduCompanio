import { pool } from '../config/database.js'

// Internship Statuses
const getAllInternshipStatuses = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM internship_statuses ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Notes Statuses
const getAllNoteStatuses = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM note_statuses ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Project Statuses
const getAllProjectStatuses = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM project_statuses ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getAllInternshipStatuses, getAllNoteStatuses, getAllProjectStatuses
}