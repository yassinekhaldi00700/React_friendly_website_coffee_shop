import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Handle register function called'); // Check if function is called

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setTimeout(() => {
        setError('');
      }, 7000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, email, password });
      
      setSuccess('Registration successful');
    setTimeout(() => {
      setSuccess('');
    }, 7000);
      
    } catch (error) {
        setError('Registred filed' + error.response.data);
        setTimeout(() => {
          setError('');
        }, 7000);
    }
    
  };

  return (
    <div className="container mx-auto p-4">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        
      <h1 className="text-4xl font-bold mb-4">Register</h1>
     
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
