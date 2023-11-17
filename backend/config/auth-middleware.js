const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: 'Not authenticated' });
}

const findById = async (id) => {
    const results = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return results.rows[0]
}

export { ensureAuthenticated, findById };