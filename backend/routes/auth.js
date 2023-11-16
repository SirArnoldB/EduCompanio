import express from 'express';
import passport from 'passport';

const router = express.Router();

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
            res.redirect('http://localhost:5173/home');
        });
    });
});

router.get('/github', passport.authenticate('github', { scope: ['read:user'] }));

router.get('/github/callback', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/auth/login/failed' }));

export default router;