import { pool } from "./database.js";

const initializeUserData = async (userId) => {
    // Define example data
    const exampleNote = {
        title: 'My First Note (Example)',
        content: 'This is an example note. It could be about a new idea or observation.',
        category: 'Idea',
        status: 'Draft'
    };

    const exampleProject = {
        title: 'Personal Website (Example Project)',
        content: 'This is an example project. It could be about building a personal website.',
        url: 'http://example.com',
        category: 'Personal',
        status: 'Idea'
    };

    const exampleInternship = {
        company: 'Microsoft (Example Company)',
        position: 'Software Engineer Intern (Example Position)',
        content: 'This is an example internship. It could be about a software engineering intern role at a tech company.',
        url: 'http://example.com',
        category: 'Paid',
        status: 'Applied'
    }; status: 'Applied'


    // Define queries
    const insertNoteQuery = `
        INSERT INTO notes (user_id, title, content, category_id, status_id)
        VALUES ($1, $2, $3, (SELECT id FROM note_categories WHERE category = $4), (SELECT id FROM note_statuses WHERE status = $5))
    `;

    const insertProjectQuery = `
        INSERT INTO projects (user_id, title, content, url, category_id, status_id)
        VALUES ($1, $2, $3, $4, (SELECT id FROM project_categories WHERE category = $5), (SELECT id FROM project_statuses WHERE status = $6))
    `;

    const insertInternshipQuery = `
        INSERT INTO internships (user_id, company, position, content, url, category_id, status_id)
        VALUES ($1, $2, $3, $4, $5, (SELECT id FROM internship_categories WHERE category = $6), (SELECT id FROM internship_statuses WHERE status = $7))
    `;

    // Run queries
    try {
        await pool.query(insertNoteQuery, [userId, exampleNote.title, exampleNote.content, exampleNote.category, exampleNote.status]);
        await pool.query(insertProjectQuery, [userId, exampleProject.title, exampleProject.content, exampleProject.url, exampleProject.category, exampleProject.status]);
        await pool.query(insertInternshipQuery, [userId, exampleInternship.company, exampleInternship.position, exampleInternship.content, exampleInternship.url, exampleInternship.category, exampleInternship.status]);
        console.log(`🚀 Example data initialized for user ${userId}`);
    } catch (err) {
        console.log(`⛔️ Error initializing example data for user ${userId}: ${err}`);
    }
}

export { initializeUserData };