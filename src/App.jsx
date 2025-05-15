import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register from './Register';
import Login from './Login';

function AppE() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>My App</h1>
      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default AppE;