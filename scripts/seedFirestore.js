const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Path to your renamed service account key file
const serviceAccount = require(path.resolve(__dirname, '../service-keys/new-servicekey.json'));

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Read the JSON file
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/data.json'), 'utf8'));

// Name of the Firestore collection
const collectionName = 'hospitals'; // Replace with your collection name

// Write each item to Firestore
data.forEach(async (doc) => {
  try {
    await db.collection(collectionName).add(doc);
    console.log('Document written:', doc);
  } catch (error) {
    console.error('Error adding document:', error);
  }
});