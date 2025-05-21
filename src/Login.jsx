import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate ();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in');
      navigate('/dashboard');
      
    } catch (err) {
      console.error('Login error:', err);
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        default:
          setError('Login failed: ' + err.message);
          break;
      }
    }
  };

 

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={handleLogin} className="card p-4 shadow-sm">
            <h2 className="mb-4 text-center">Ingresar</h2>

            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">Email</label>
              <input
                id="login-email"
                name="email"
                className="form-control"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="login-password" className="form-label">Password</label>
              <input
                id="login-password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>

            {error && (
              <div className="alert alert-danger mt-3 text-center">{error}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;