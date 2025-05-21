import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboad';


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
export default Dashboard