import admin from 'firebase-admin';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the path to the service account key JSON file
const serviceAccountPath = path.resolve(__dirname, process.env.FIREBASE_SERVICE_ACCOUNT_PATH);

// Initialize Firebase 
const app = admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccountPath),
    }
)

export { app }