// const fs = require('fs');
// const { initializeApp } = require('firebase/app');
// const { getFirestore, collection, addDoc } = require('firebase/firestore');
// const dotenv = require('dotenv');

// dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const seedData = async () => {
//   const rawData = fs.readFileSync('src/data/data.json', 'utf-8');
//   const data = JSON.parse(rawData);

//   for (const item of data) {
//     await addDoc(collection(db, 'hospitals'), item);
//   }

//   console.log('Data seeded successfully');
// };

// seedData().catch((error) => console.error('Error seeding data:', error));
// ﻿