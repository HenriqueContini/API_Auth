import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "dotenv/config";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: `${process.env.projectId}.firebaseapp.com`,
  projectId: process.env.projectId,
  storageBucket: `${process.env.projectId}.appspot.com`,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
