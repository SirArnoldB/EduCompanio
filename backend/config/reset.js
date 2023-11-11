import { pool } from "./database.js";
import './dotenv.js';
import notesData from '../data/notes.json' assert { type: "json" };
import internshipsData from '../data/internships.json' assert { type: "json" };
import projectsData from '../data/projects.json' assert { type: "json" };


// ------------------- Categories and Statuses Tables -------------------


// Create and seed Note Categories Table
const createAndSeedNoteCategoriesTable = async () => {
    const categories = ['Idea', 'Reminder', 'Meeting', 'Research', 'Summary', 'Reference'];
    const query = `
    DROP TABLE IF EXISTS note_categories;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS note_categories (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        category VARCHAR(50) NOT NULL
    );
    INSERT INTO note_categories (category) VALUES ${categories.map(category => `('${category}')`).join(',')};
    `
    try {
        await pool.query(query);
        console.log("🚀 Note Categories Table is successfully created and seeded");
    } catch (err) {
        console.log(`⛔️ Error seeding notes categories data: ${err}`);
    }
}

// Create and seed Note Statuses Table
const createAndSeedNoteStatusesTable = async () => {
    const statuses = ['Draft', 'Final', 'Archived', 'Important'];
    const query = `
    DROP TABLE IF EXISTS note_statuses;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS note_statuses (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        status VARCHAR(50) NOT NULL
    );
    INSERT INTO note_statuses (status) VALUES ${statuses.map(status => `('${status}')`).join(',')};
    `
    try {
        await pool.query(query);
        console.log("🚀 Note Statuses Table is successfully created and seeded");
    } catch (err) {
        console.log(`⛔️ Error seeding notes statuses data: ${err}`);
    }
}

// Create and seed Internship Categories Table
const createAndSeedInternshipCategoriesTable = async () => {
    const categories = ['Paid', 'Unpaid', 'For-credit', 'Not-for-credit', 'Summer', 'Quarterly', 'Semester', 'Year', 'Holiday', 'Co-op', 'Rotation', 'Externship', 'Service Learning'];
    const query = `
    DROP TABLE IF EXISTS internship_categories;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS internship_categories (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        category VARCHAR(50) NOT NULL
    );
    INSERT INTO internship_categories (category) VALUES ${categories.map(category => `('${category}')`).join(',')};
    `
    try {
        await pool.query(query);
        console.log("🚀 Internship Categories Table is successfully created and seeded");
    } catch (err) {
        console.log(`⛔️ Error seeding internship categories data: ${err}`);
    }
}

// Create and seed Internship Statuses Table
const createAndSeedInternshipStatusesTable = async () => {
    const statuses = ['Applied', 'Screen', 'Interviewing', 'Offer', 'Rejected'];
    const query = `
    DROP TABLE IF EXISTS internship_statuses;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS internship_statuses (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        status VARCHAR(50) NOT NULL
    );
    INSERT INTO internship_statuses (status) VALUES ${statuses.map(status => `('${status}')`).join(',')};
    `
    try {
        await pool.query(query);
        console.log("🚀 Internship Statuses Table is successfully created and seeded");
    } catch (err) {
        console.log(`⛔️ Error seeding internship statuses data: ${err}`);
    }
}

// Create and seed Project Categories Table
const createAndSeedProjectCategoriesTable = async () => {
    const categories = ['Personal', 'Academic', 'Professional', 'Freelance'];
    const query = `
    DROP TABLE IF EXISTS project_categories;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS project_categories (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        category VARCHAR(50) NOT NULL
    );
    INSERT INTO project_categories (category) VALUES ${categories.map(category => `('${category}')`).join(',')};
    `
    try {
        await pool.query(query);
        console.log("🚀 Project Categories Table is successfully created and seeded");
    } catch (err) {
        console.log(`⛔️ Error seeding project categories data: ${err}`);
    }
}

// Create and seed Project Statuses Table
const createAndSeedProjectStatusesTable = async () => {
    const statuses = ['Idea', 'Planning', 'In Progress', 'Completed', 'On Hold', 'Canceled'];
    const query = `
    DROP TABLE IF EXISTS project_statuses;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS project_statuses (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        status VARCHAR(50) NOT NULL
    );
    INSERT INTO project_statuses (status) VALUES ${statuses.map(status => `('${status}')`).join(',')};
    `
    try {
        await pool.query(query);
        console.log("🚀 Project Statuses Table is successfully created and seeded");
    } catch (err) {
        console.log(`⛔️ Error seeding project statuses data: ${err}`);
    }
}


// ------------------- Notes, Internships, and Projects Tables -------------------

// ------------------- Notes Table ------------------- 

// Create Notes Table
const createNotesTable = async () => {
    const CreateNotesTable = `
    DROP TABLE IF EXISTS notes;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS notes (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        category_id VARCHAR(50) NOT NULL,
        status_id VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
`
    try {
        const res = await pool.query(CreateNotesTable);
        console.log("🚀 Notes Table is successfully created");
    } catch (err) {
        console.log(`⛔️ Error creating notes table: ${err}`);
    }

}

// Seed the Notes table
const seedNotesTable = async () => {
    // Create Notes Table
    await createNotesTable();

    // Seed Notes Table Query
    const seedNotesQuery = `
        INSERT INTO notes (title, content, category_id, status_id)
        VALUES ($1, $2, (SELECT id FROM note_categories WHERE category = $3), (SELECT id FROM note_statuses WHERE status = $4))
    `;

    // Add each note to the database
    try {
        notesData.forEach(async (note) => {
            const res = await pool.query(seedNotesQuery, [
                note.title,
                note.content,
                note.category,
                note.status,
            ]);
        });
        console.log(`🚀 Notes seeded successfully!`)
    } catch (err) {
        console.log(`⛔️ Error seeding notes data: ${err}`);
    }
}


// ------------------- Internships Table -------------------

// Create Internships Table
const createInternshipsTable = async () => {
    const CreateInternshipsTable = `
    DROP TABLE IF EXISTS internships;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS internships (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        company VARCHAR(500) NOT NULL,
        position VARCHAR(500) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        url VARCHAR(500) NOT NULL,
        category_id VARCHAR(50) NOT NULL,
        status_id VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
`
    try {
        const res = await pool.query(CreateInternshipsTable);
        console.log("🚀 Internships Table is successfully created");
    } catch (err) {
        console.log(`⛔️ Error creating internships table: ${err}`);
    }

}

// Seed the Internships table
const seedInternshipsTable = async () => {
    // Create Internships Table
    await createInternshipsTable();

    // Seed Internships Table Query
    const seedInternshipsQuery = `
        INSERT INTO internships (company, position, content, url, category_id, status_id)
        VALUES ($1, $2, $3, $4, (SELECT id FROM internship_categories WHERE category = $5), (SELECT id FROM internship_statuses WHERE status = $6))
    `;

    // Add each internship to the database
    try {
        internshipsData.forEach(async (internship) => {
            const res = await pool.query(seedInternshipsQuery, [
                internship.company,
                internship.position,
                internship.content,
                internship.url,
                internship.category,
                internship.status,
            ]);
        });
        console.log(`🚀 Internships seeded successfully!`)
    } catch (err) {
        console.log(`⛔️ Error seeding internships data: ${err}`);
    }
}


// ------------------- Projects Table -------------------

// Create Projects Table
const createProjectsTable = async () => {
    const CreateProjectsTable = `
    DROP TABLE IF EXISTS projects;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    
    CREATE TABLE IF NOT EXISTS projects (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        url VARCHAR(500) NOT NULL,
        category_id VARCHAR(50) NOT NULL,
        status_id VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );
`
    try {
        const res = await pool.query(CreateProjectsTable)
        console.log("🚀 Projects Table is successfully created");
    } catch (err) {
        console.log(`⛔️ Error creating projects table: ${err}`);
    }

}

// Seed the Projects table
const seedProjectsTable = async () => {
    // Create Projects Table
    await createProjectsTable();

    // Seed Projects Table Query
    const seedProjectsQuery = `
        INSERT INTO projects (title, content, url, category_id, status_id)
        VALUES ($1, $2, $3, (SELECT id FROM project_categories WHERE category = $4), (SELECT id FROM project_statuses WHERE status = $5))
    `;

    // Add each project to the database
    try {
        projectsData.forEach(async (project) => {
            const res = await pool.query(seedProjectsQuery, [
                project.title,
                project.content,
                project.url,
                project.category,
                project.status,
            ]);
        });
        console.log(`🚀 Projects seeded successfully!`)
    } catch (err) {
        console.log(`⛔️ Error seeding projects data: ${err}`);
    }
}


// ------------------- Run All Functions -------------------

const runAllFunctions = async () => {
    await createAndSeedNoteCategoriesTable();
    await createAndSeedNoteStatusesTable();
    await createAndSeedInternshipCategoriesTable();
    await createAndSeedInternshipStatusesTable();
    await createAndSeedProjectCategoriesTable();
    await createAndSeedProjectStatusesTable();
    await seedNotesTable();
    await seedInternshipsTable();
    await seedProjectsTable();
}

runAllFunctions();
