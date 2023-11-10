import { pool } from '../config/database.js'


const createInternship = async (req, res) => {
    try {
        const { company, position, website, category } = req.body

        const results = await pool.query(
            `INSERT INTO internships (company, position, website, category)
            VALUES($1, $2, $3, $4) 
            RETURNING *`,
            [company, position, website, category]
        )
        res.status(201).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getAllInternships = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM internships ORDER BY internship_id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const getInternshipById = async (req, res) => {
    try {
        const internship_id = parseInt(req.params.internship_id)
        const results = await pool.query('SELECT * FROM internships WHERE internship_id = $1', [internship_id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const updateInternship = async (req, res) => {
    try {
        const internship_id = parseInt(req.params.internship_id)
        const { company, position, website, category } = req.body
        const results = await pool.query(
            `UPDATE internships
            SET company = $1, position = $2, website = $3, category = $4
            WHERE internship_id = $5`, 
            [company, position, website, category, internship_id]
        )
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

const deleteInternship = async (req, res) => {
    try {
        const internship_id = parseInt(req.params.internship_id)
        const results = await pool.query('DELETE FROM internships WHERE internship_id = $1', [internship_id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default {
    createInternship,
    getAllInternships,
    getInternshipById,
    updateInternship,
    deleteInternship
}

