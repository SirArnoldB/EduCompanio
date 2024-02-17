import admin from 'firebase-admin';

// Initialize Firebase 
const app = admin.initializeApp(
    {
        credential: admin.credential.applicationDefault(),
    }
)

export { app }