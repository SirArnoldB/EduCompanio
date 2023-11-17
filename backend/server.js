import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes.js';
import internshipsRouter from './routes/internships.js';
import projectsRouter from './routes/projects.js';
import categoriesRouter from './routes/categories.js';
import statusesRouter from './routes/statuses.js';
import ensureAuthenticated from './config/auth-middleware.js';

import passport from 'passport'
import session from 'express-session'
import { GitHub } from './config/auth.js'
import authRouter from './routes/auth.js'

// create express app
const app = express();

// set up express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'https://educompanio.up.railway.app' : 'http://localhost:5173'

// set up the cors middleware
app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));

// set up the passport middleware
app.use(passport.initialize()) // Used to initialize passport
app.use(passport.session()) // Used to persist login sessions
passport.use(GitHub) // Use the GitHub strategy for passport

// serve static files
app.use(express.static('/public'));

// set up the passport user serialization
passport.serializeUser((user, done) => {
    done(null, user)
})

// set up the passport user deserialization
passport.deserializeUser((user, done) => {
    done(null, user)
})

// set up the express app to handle data parsing
app.use(express.json());

// Set up the default route
app.get('/', (req, res) => {
    res.redirect(`${CLIENT_URL}/dashboard`)
})

// set up the auth routes
app.use('/auth', authRouter);

// set up the routes
app.use('/api/notes', ensureAuthenticated, notesRouter);
app.use('/api/internships', ensureAuthenticated, internshipsRouter);
app.use('/api/projects', ensureAuthenticated, projectsRouter);

// set up the categories routes
app.use('/api/categories', categoriesRouter);

// set up the statuses routes
app.use('/api/statuses', statusesRouter);

// set up the port that the server will run on
const PORT = process.env.PORT || 3002;

// listen on the port
// listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})
