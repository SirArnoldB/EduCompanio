import express from 'express';
import cors from 'cors';
import notesRouter from './routes/notes.js';
import internshipsRouter from './routes/internships.js';
import projectsRouter from './routes/projects.js';

// create express app
const app = express();

// set up the cors middleware
app.use(cors());

// set up the express app to handle data parsing
app.use(express.json());

// TODO: Add API paths for the backend here
app.use('/notes', notesRouter);
app.use('/internships', internshipsRouter);
app.use('/projects', projectsRouter);

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
