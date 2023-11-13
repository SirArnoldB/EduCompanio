import { pool } from "./database.js";
import './dotenv.js';

// TODO: Add code to reset the database here
//set up the database connection

const createNotesTable = async () => { 
    const CreateNotesTable = `
    DROP TABLE IF EXISTS notes;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS notes (
        note_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        content VARCHAR(500) NOT NULL,
        category VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() 
    );
`
    try {
        const res = await pool.query(CreateNotesTable);
        console.log("Notes Table is successfully created");
    } catch (err) {
        console.log(err);
    }

}

const createInternshipsTable = async () => { 
    const CreateInternshipsTable = `
    DROP TABLE IF EXISTS internships;
   

    CREATE TABLE IF NOT EXISTS internships (
        internship_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        company VARCHAR(50) NOT NULL,
        position VARCHAR(50) NOT NULL,
        website VARCHAR(50) NOT NULL,
        category VARCHAR(50) NOT NULL
    );
`
    try {
        const res = await pool.query(CreateInternshipsTable);
        console.log("Internships Table is successfully created");
    } catch (err) {
        console.log(err);
    }

}

const createProjectsTable = async () => { 
    const CreateProjectsTable = `
    DROP TABLE IF EXISTS projects;
    
    CREATE TABLE IF NOT EXISTS projects (
        project_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        project_name VARCHAR(50) NOT NULL,
        description VARCHAR(50) NOT NULL,
        url VARCHAR(225) NOT NULL,
        category VARCHAR(50) NOT NULL
    );
`
    try {
        const res = await pool.query(CreateProjectsTable)
        pool.end();
        console.log("Projects Table is successfully created");
    } catch (err) {
        console.log("error occured : " + err);
    }

}

createNotesTable();
createInternshipsTable();
createProjectsTable();