import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes.js';
import internshipsRouter from './routes/internships.js';
import projectsRouter from './routes/projects.js';
import categoriesRouter from './routes/categories.js';
import statusesRouter from './routes/statuses.js';
import initialDataRouter from './routes/initial-data.js';
import authMiddleware from './config/auth-middleware.js';

// create express app
const app = express();

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'productionURL' : 'http://localhost:5173'

// set up the cors middleware
app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));

// set up the express app to handle data parsing
app.use(express.json());


// set up the categories routes
app.use('/api/categories', categoriesRouter);

// set up the statuses routes
app.use('/api/statuses', statusesRouter);


// set up the auth middleware
app.use(authMiddleware);

// set up the routes
app.use('/api/notes', notesRouter);
app.use('/api/internships', internshipsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/initialize', initialDataRouter);

// set up the port that the server will run on
const PORT = process.env.PORT || 3000;

// listen on the port
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})
