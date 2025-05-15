import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css'; // 
import AppE from './App.jsx';
import App from './FirstApp.jsx';
import Register from './Register';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <div className="container my-5">
      {/* Top Section */}
      <App />

      {/* Side-by-side Login and Register */}
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-center">
          <Login />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <Register />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
