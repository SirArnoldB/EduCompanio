import { pool } from '../config/database.js'

// Internship Categories
const getAllInternshipCategories = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM internship_categories ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Notes Categories
const getAllNoteCategories = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM note_categories ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Project Categories
const getAllProjectCategories = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM project_categories ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getAllInternshipCategories, getAllNoteCategories, getAllProjectCategories
}