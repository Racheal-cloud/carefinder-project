// adminSetup.js
const admin = require('firebase-admin');
const serviceAccount = require('../service-keys/carefinder-project-serviceAccountKey.json'); // Update this path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// List of user IDs to be set as admins
const adminUserIds = ['Ul9c3NJixOTfyoUuxtIPLCIzRIt2']; // Replace with your actual user IDs

async function setAdminRole(userId) {
  const userRef = db.collection('users').doc(userId);
  await userRef.set({
    role: 'admin'
  }, { merge: true });

  console.log(`User ${userId} is now an admin`);
}

async function setupAdmins() {
  for (const userId of adminUserIds) {
    await setAdminRole(userId);
  }
}

setupAdmins().catch(console.error);
