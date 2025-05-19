// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_b6AuQTyoP07Elt0eElJqPJt4cgoJOyk",
  authDomain: "sistema-registro-3945b.firebaseapp.com",
  projectId: "sistema-registro-3945b",
  storageBucket: "sistema-registro-3945b.firebasestorage.app",
  messagingSenderId: "914434470643",
  appId: "1:914434470643:web:dde7fef43e615551d4bd86",
  measurementId: "G-ZYBRXCJBLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);