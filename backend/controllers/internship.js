import { pool } from '../config/database.js'


const createInternship = async (req, res) => {
    try {
        const { company, position, content, url, category_id, status_id } = req.body

        const results = await pool.query(`
            INSERT INTO internships (company, position, content, url, category_id, status_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [company, position, content, url, category_id, status_id]
        )
        res.status(201).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getAllInternships = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM internships ORDER BY created_at DESC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getInternshipById = async (req, res) => {
    try {
        const id = req.params.id
        const results = await pool.query('SELECT * FROM internships WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const updateInternship = async (req, res) => {
    try {
        const id = req.params.id
        const { company, position, content, url, category_id, status_id } = req.body
        const { rows: updatedInternships } = await pool.query(
            `UPDATE internships
            SET company = $1, position = $2, content = $3, url = $4, category_id = $5, status_id = $6
            WHERE id = $7
            RETURNING *`,
            [company, position, content, url, category_id, status_id, id]
        )
        res.status(200).json(updatedInternships[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const deleteInternship = async (req, res) => {
    try {
        const id = req.params.id
        const results = await pool.query('DELETE FROM internships WHERE id = $1 RETURNING *', [id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    createInternship,
    getAllInternships,
    getInternshipById,
    updateInternship,
    deleteInternship
}

