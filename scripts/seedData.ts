import fs from 'fs';
// import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seedData = async () => {
//   const dataPath = path.join(__dirname, '..', 'data.json');
  const rawData = fs.readFileSync('src/data/data.json', 'utf-8');
  const data = JSON.parse(rawData);

  for (const item of data) {
    await addDoc(collection(db, 'hospitals'), item);
  }

  console.log('Data seeded successfully');
};

seedData().catch((error) => console.error('Error seeding data:', error));