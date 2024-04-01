import admin from 'firebase-admin';

// Firebase service account credentials
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS);

// Initialize Firebase 
const app = admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount),
    }
)

export { app }