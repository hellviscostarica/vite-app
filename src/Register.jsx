import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setMessage(`User ${formData.username} successfully registered!`);
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <div className="container mt-5 px-3">
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={handleRegister} className="card p-4 shadow-sm bg-white">
            <h2 className="mb-4 text-center">Registrarse</h2>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Register
            </button>

            {error && (
              <div className="alert alert-danger mt-3 text-center">{error}</div>
            )}
            {message && (
              <div className="alert alert-success mt-3 text-center">{message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;