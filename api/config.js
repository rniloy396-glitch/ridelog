// api/config.js
// Vercel serverless function — serves Firebase config from environment variables
// This keeps API keys out of your HTML and GitHub repo entirely

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Return config from environment variables
  res.status(200).json({
    apiKey:            process.env.FIREBASE_API_KEY,
    authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
    projectId:         process.env.FIREBASE_PROJECT_ID,
    storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
    appId:             process.env.FIREBASE_APP_ID,
    measurementId:     process.env.FIREBASE_MEASUREMENT_ID,
  });
}
