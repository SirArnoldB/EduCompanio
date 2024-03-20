import './dotenv.js';
import { app } from "../firebase/admin.js";

// Database Connection
const db = app.firestore();

// ------------------- Categories and Statuses Collections -------------------
const noteCategories = [
    { category: 'Idea' },
    { category: 'Reminder' },
    { category: 'Meeting' },
    { category: 'Research' },
    { category: 'Summary' },
    { category: 'Reference' }
];

const noteStatuses = [
    { status: 'Draft' },
    { status: 'Final' },
    { status: 'Archived' },
    { status: 'Important' }
];

const jobCategories = [
    { category: 'Paid' },
    { category: 'Unpaid' },
    { category: 'For-credit' },
    { category: 'Not-for-credit' },
    { category: 'Summer' },
    { category: 'Quarterly' },
    { category: 'Semester' },
    { category: 'Year' },
    { category: 'Holiday' },
    { category: 'Co-op' },
    { category: 'Rotation' },
    { category: 'Externship' },
    { category: 'Service Learning' }
];

const jobStatuses = [
    { status: 'Applied' },
    { status: 'Screen' },
    { status: 'Interviewing' },
    { status: 'Offer' },
    { status: 'Rejected' }
];

const projectCategories = [
    { category: 'Personal' },
    { category: 'Academic' },
    { category: 'Professional' },
    { category: 'Freelance' }
];

const projectStatuses = [
    { status: 'Idea' },
    { status: 'Planning' },
    { status: 'In Progress' },
    { status: 'Completed' },
    { status: 'On Hold' },
    { status: 'Canceled' }
];

const resetCategoriesAndStatuses = async (collectionName, data) => {
    try {
        const collectionRef = db.collection(collectionName);
        const batch = db.batch();

        // Check if the collection exists
        const collectionSnapshot = await collectionRef.get();

        if (collectionSnapshot.empty) {
            // If the collection doesn't exist, add new documents
            for (const doc of data) {
                const newDocRef = await collectionRef.add(doc);
                batch.update(newDocRef, { id: newDocRef.id });
                console.log(`Document added with ID: ${newDocRef.id}`);
            }
            await batch.commit();
            console.log(`🚀 ${collectionName} collection is successfully created`);
        } else {
            // If the collection exists, delete all existing documents
            collectionSnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });

            // Add new documents to the collection
            for (const doc of data) {
                const newDocRef = await collectionRef.add(doc);
                batch.update(newDocRef, { id: newDocRef.id });
                console.log(`Document added with ID: ${newDocRef.id}`);
            }
            await batch.commit();
            console.log(`🚀 ${collectionName} collection is successfully reset`);
        }
    } catch (err) {
        console.log(`⛔️ Error updating ${collectionName} collection: ${err}`);
    }
};

// ------------------- Tags Collections -------------------
const organizationTags = [
    { tag: 'Education' },
    { tag: 'Technology' },
    { tag: 'Diversity' },
    { tag: 'Community' },
    { tag: 'Women in Tech' },
    { tag: 'Student-led' },
    { tag: 'Entrepreneurship' },
    { tag: 'Social Impact' },
    { tag: 'Leadership' },
    { tag: 'Networking' }
];

const skillTags = [
    { tag: 'beginner' },
    { tag: 'game-based learning' },
    { tag: 'computer science' },
    { tag: 'digital marketing' },
    { tag: 'analytics' },
    { tag: 'bootcamps' },
    { tag: 'mentorship' },
    { tag: 'job placement' },
    { tag: 'career services' }
];

const communityJobTags = [
    { tag: 'internship' },
    { tag: 'volunteer' },
    { tag: 'part time' },
    { tag: 'full time' }
];

const communityProjectTags = [
    { tag: 'beginner' },
    { tag: 'intermediate' },
    { tag: 'advanced' }
];

const healthTags = [
    { tag: 'mental health' },
    { tag: 'physical health' },
    { tag: 'nutrition' },
    { tag: 'exercise' },
    { tag: 'wellness' },
    { tag: 'stress management' },
    { tag: 'counseling' },
    { tag: 'yoga' },
    { tag: 'meditation' },
    { tag: 'fitness' }
];

const financeTags = [
    { tag: 'budgeting' },
    { tag: 'financial aid' },
    { tag: 'scholarships' },
    { tag: 'loans' },
    { tag: 'personal finance' },
    { tag: 'investment' },
    { tag: 'tax planning' },
    { tag: 'credit management' },
    { tag: 'financial literacy' },
    { tag: 'money management' }
];

const resetTags = async (collectionName, data) => {
    try {
        const collectionRef = db.collection(collectionName);
        const batch = db.batch();

        // Check if the collection exists
        const collectionSnapshot = await collectionRef.get();
        if (collectionSnapshot.empty) {
            // If the collection doesn't exist, add new documents
            for (const doc of data) {
                const newDocRef = await collectionRef.add(doc);
                batch.update(newDocRef, { id: newDocRef.id });
                console.log(`Document added with ID: ${newDocRef.id}`);
            }
            await batch.commit();
            console.log(`🚀 ${collectionName} collection is successfully created`);
        } else {
            // If the collection exists, delete all existing documents
            collectionSnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            // Add new documents to the collection
            for (const doc of data) {
                const newDocRef = await collectionRef.add(doc);
                batch.update(newDocRef, { id: newDocRef.id });
                console.log(`Document added with ID: ${newDocRef.id}`);
            }
            await batch.commit();
            console.log(`🚀 ${collectionName} collection is successfully reset`);
        }
    } catch (err) {
        console.log(`⛔️ Error updating ${collectionName} collection: ${err}`);
    }
};

// ------------------- Other Collections -------------------

const resetCollections = async () => {
    try {
        // Create collections if they don't exist
        await db.collection('organizations').doc().set({});
        await db.collection('skills').doc().set({});
        await db.collection('health').doc().set({});
        await db.collection('finance').doc().set({});
        await db.collection('jobs').doc().set({});
        await db.collection('communityJobs').doc().set({});
        await db.collection('notes').doc().set({});
        await db.collection('resources').doc().set({});
        await db.collection('tags').doc().set({});
        await db.collection('projects').doc().set({});
        await db.collection('communityProjects').doc().set({});

        console.log("🚀 Collections are successfully created");
    } catch (err) {
        console.log(`⛔️ Error resetting collections: ${err}`);
    }
};


// ------------------- Run All Functions -------------------
const runAllFunctions = async () => {
    await resetCategoriesAndStatuses('noteCategories', noteCategories);
    await resetCategoriesAndStatuses('noteStatuses', noteStatuses);
    await resetCategoriesAndStatuses('jobCategories', jobCategories);
    await resetCategoriesAndStatuses('jobStatuses', jobStatuses);
    await resetCategoriesAndStatuses('projectCategories', projectCategories);
    await resetCategoriesAndStatuses('projectStatuses', projectStatuses);
    await resetTags('organizationTags', organizationTags);
    await resetTags('skillTags', skillTags);
    await resetTags('communityJobTags', communityJobTags);
    await resetTags('communityProjectTags', communityProjectTags);
    await resetTags('healthTags', healthTags);
    await resetTags('financeTags', financeTags);
    await resetCollections();
};

runAllFunctions();
