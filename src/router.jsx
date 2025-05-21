import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
