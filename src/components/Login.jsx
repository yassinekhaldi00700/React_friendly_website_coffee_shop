import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      
      
      setSuccess('Login successful! Redirecting...');
      setError(''); // Clear any previous errors

      // Save the token or handle successful login
      // For example, you might save the token to localStorage
      localStorage.setItem('authToken', response.data.token);

      // Redirect after a short delay to show the success message
      setTimeout(() => {
        navigate('/'); // Assuming you have a dashboard or home page
      }, 1500); // Redirect after 2 seconds
    } catch (error) {
      setSuccess(''); // Clear any previous success messages
      if (error.response && error.response.data) {
        setError('Login failed: ' + error.response.data); // Display the error message from the backend
      } else {
        setError('Login failed: An unknown error occurred');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      <button
        className="text-blue-500 mt-2"
        onClick={() => navigate('/Forgot_password')}
      >
        Forgot Password?
      </button>
    </div>
  );
};

export default Login;
