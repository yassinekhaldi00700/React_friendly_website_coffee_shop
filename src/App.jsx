import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Login from './components/Login'; 
import Register from './components/Register';
import Forget_password from './components/Forget_password';

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Forgot_password" element={<Forget_password/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;