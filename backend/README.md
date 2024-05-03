# EduCompanio Backend

## Description

The backend of EduCompanio is built using Node.js and Express, providing RESTful APIs for data management and integration with Google Cloud Firestore and Firebase Authentication. It serves as the foundation for the platform's functionality and data persistence.

## Installation

To set up the backend development environment, follow these steps:

1. Navigate to the backend directory: `cd backend`
2. Install the dependencies: `npm install`

## Environment Variables

The backend requires the following environment variables to be set:

- `FIREBASE_SERVICE_ACCOUNT_CREDENTIALS`: The service account credentials for Firebase Authentication object.
- `CLIENT_URL`: The URL of the frontend client for production.
- `CLIENT_URL_DEV`: The URL of the frontend client for development.
- `GOOGLE_API_KEY`: The API key for Google Cloud Project.
- `GEMINI_PRO_LATEST`: "gemini-1.5-pro-latest"
- `GEMINI_PRO`: "gemini-pro"

## Usage

To start the backend server:

1. Navigate to the backend directory: `cd backend`
2. Run `npm start`

The backend server will start running on `http://localhost:3000`.
