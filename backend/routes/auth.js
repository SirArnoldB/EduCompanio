import express from 'express';
import passport from 'passport';

const router = express.Router();

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'https://educompanio.up.railway.app' : 'http://localhost:5173'

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'User has successfully authenticated',
            user: req.user,
            cookies: req.cookies,
        });
    }
});

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'User failed to authenticate.',
    });
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie('connect.sid');
            res.redirect(`${CLIENT_URL}/home`);
        });
    });
});

router.get('/github', passport.authenticate('github', { scope: ['read:user'] }));

router.get('/github/callback', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/auth/login/failed' }));

export default router;