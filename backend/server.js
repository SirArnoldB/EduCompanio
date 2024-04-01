import express from 'express';
import cors from 'cors';
import authMiddleware from './config/auth-middleware.js';

// Routes
import notesRouter from './routes/notes.js';
import jobsRouter from './routes/jobs.js';
import projectsRouter from './routes/projects.js';
import categoriesRouter from './routes/categories.js';
import statusesRouter from './routes/statuses.js';
import communityJobsRouter from './routes/community-jobs.js';
import communityProjectsRouter from './routes/community-projects.js';
import financeResourcesRouter from './routes/finance.js';
import healthResourcesRouter from './routes/health.js';
import organizationsRouter from './routes/organizations.js';
import skillsRouter from './routes/skills.js';
import tagsRouter from './routes/tags.js';


// create express app
const app = express();

const CLIENT_URL = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL : process.env.CLIENT_URL_DEV;

// set up the cors middleware
app.use(cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));

// set up the express app to handle data parsing
app.use(express.json());

app.use('/api/categories', categoriesRouter);
app.use('/api/statuses', statusesRouter);
app.use('/api/tags', tagsRouter);

// set up the auth middleware
app.use(authMiddleware);

// set up the routes
app.use('/api/notes', notesRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/community-jobs', communityJobsRouter);
app.use('/api/community-projects', communityProjectsRouter);
app.use('/api/finance-resources', financeResourcesRouter);
app.use('/api/health-resources', healthResourcesRouter);
app.use('/api/organizations', organizationsRouter);
app.use('/api/skills', skillsRouter);

// set up the error handler
app.use((req, res, next) => {
    if (res.statusCode === 404) {
        res.status(404).json({ message: 'Resource not found' });
    } else {
        next();
    }
});

// set up the port that the server will run on
const PORT = process.env.PORT || 3000;

// listen on the port
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})
