import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes.js';
import internshipsRouter from './routes/internships.js';
import projectsRouter from './routes/projects.js';
import categoriesRouter from './routes/categories.js';
import statusesRouter from './routes/statuses.js';

// create express app
const app = express();

// set up the cors middleware
app.use(cors());

// set up the express app to handle data parsing
app.use(express.json());

// set up the routes
app.use('/notes', notesRouter);
app.use('/internships', internshipsRouter);
app.use('/projects', projectsRouter);

// set up the categories routes
app.use('/categories', categoriesRouter);

// set up the statuses routes
app.use('/statuses', statusesRouter);

// Set up the default route
app.get('/', (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 20px;">Welcome to the EduCompanio API!</h1>`
    )
})

// set up the port that the server will run on
const PORT = process.env.PORT || 3002;

// listen on the port
// listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})
