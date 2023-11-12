import { pool } from '../config/database.js'

// Internship Statuses
const getAllInternshipStatuses = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT * FROM internship_statuses
            ORDER BY CASE
                WHEN status = 'Applied' THEN 1
                WHEN status = 'Screen' THEN 2
                WHEN status = 'Interviewing' THEN 3
                WHEN status = 'Offer' THEN 4
                WHEN status = 'Rejected' THEN 5
                ELSE 6
            END
        `);
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Notes Statuses
const getAllNoteStatuses = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT * FROM note_statuses
            ORDER BY CASE
                WHEN status = 'Draft' THEN 1
                WHEN status = 'Final' THEN 2
                WHEN status = 'Important' THEN 3
                WHEN status = 'Archived' THEN 4
                ELSE 5
            END
        `);
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Project Statuses
const getAllProjectStatuses = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT * FROM project_statuses
            ORDER BY CASE
                WHEN status = 'Idea' THEN 1
                WHEN status = 'Planning' THEN 2
                WHEN status = 'In Progress' THEN 3
                WHEN status = 'Completed' THEN 4
                WHEN status = 'On Hold' THEN 5
                WHEN status = 'Canceled' THEN 6
                ELSE 7
            END
        `);
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getAllInternshipStatuses, getAllNoteStatuses, getAllProjectStatuses
}