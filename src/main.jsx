// main.jsx or index.jsx

import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css'; 
import Header from './HeaderComponent.jsx';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { AppRouter } from './router'; 


// Optional: Firebase config (required if you're using Firebase)
  const firebaseConfig = {
  apiKey: "AIzaSyD_b6AuQTyoP07Elt0eElJqPJt4cgoJOyk",
  authDomain: "sistema-registro-3945b.firebaseapp.com",
  projectId: "sistema-registro-3945b",
  storageBucket: "sistema-registro-3945b.firebasestorage.app",
  messagingSenderId: "914434470643",
  appId: "1:914434470643:web:dde7fef43e615551d4bd86",
  measurementId: "G-ZYBRXCJBLX"
};

// Initialize Firebase (if not done elsewhere)
initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>

<AppRouter />
      
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there is an element with id='root' in your index.html.");
}