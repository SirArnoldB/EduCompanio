import { pool } from '../config/database.js'


const createInternship = async (req, res) => {
    try {
        const { company, position, content, url, category, status } = req.body

        const results = await pool.query(`
            INSERT INTO internships (company, position, content, url, category_id, status_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM internship_categories WHERE category = $5), (SELECT id FROM internship_statuses WHERE status = $6))
            RETURNING *`,
            [company, position, content, url, category, status]
        )
        res.status(201).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getAllInternships = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM internships ORDER BY created_at ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getInternshipById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM internships WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const updateInternship = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { company, position, content, url, category, status } = req.body
        const results = await pool.query(
            `UPDATE internships
            SET company = $1, position = $2, content = $3, url = $4, category_id = (SELECT id FROM internship_categories WHERE category = $5), status_id = (SELECT id FROM internship_statuses WHERE status = $6)
            WHERE id = $5`,
            [company, position, content, url, category, status, id]
        )
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const deleteInternship = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM internships WHERE id = $1', [id])
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

