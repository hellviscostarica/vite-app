import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Correct import
import './index.css'; // ✅ Correct import

import App from './FirstApp.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
