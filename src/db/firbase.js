// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAfIqbzl-Y2REMtUnljJV_l5WAc8pkRmac",
  authDomain: "reactpersonalproject-e097b.firebaseapp.com",
  projectId: "reactpersonalproject-e097b",
  storageBucket: "reactpersonalproject-e097b.appspot.com",
  messagingSenderId: "204293837532",
  appId: "1:204293837532:web:fdee75de54b8f25e445a19",
  measurementId: "G-892P3DPRQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
