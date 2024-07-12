import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiCoffeescript } from 'react-icons/si';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Cookies from 'js-cookie';
import Button from '../layouts/Button'; // Assuming you have a Button component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for auth token and user information in cookies
    const token = Cookies.get('authToken');
    const savedUsername = Cookies.get('username');
    
    if (token && savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear cookies
    Cookies.remove('authToken');
    Cookies.remove('username');
    setUsername(null);
    navigate('/');
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 lg:px-32 bg-[#ad871c]">
        <div className="flex flex-row items-center cursor-pointer gap-2">
          <span>
            <SiCoffeescript />
          </span>
          <h1 className='text-xl font-semibold'>Caffe Jawhara</h1>
        </div>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="/" className="group relative inline-block cursor-pointer hover:text-brightColor">
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="/menu" className="group relative inline-block cursor-pointer hover:text-brightColor">
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="/about_us" className="group relative inline-block cursor-pointer hover:text-brightColor">
            About us
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="/products" className="group relative inline-block cursor-pointer hover:text-brightColor">
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="/review" className="group relative inline-block cursor-pointer hover:text-brightColor">
            Review
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          {username ? (
            <>
              <span className="text-white">{username}</span>
              <button onClick={handleLogout} className="text-red-500">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="group relative inline-block cursor-pointer hover:text-brightColor">
                Login
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link to="/register" className="group relative inline-block cursor-pointer hover:text-brightColor">
                Register
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </Link>
            </>
          )}
        </nav>
        <div className="hidden md:block">
          {username ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <Button title="Login" />
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <MdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-[#ad871c] p-5">
          <Link to="/" className="block py-2 cursor-pointer hover:text-brightColor">Home</Link>
          <Link to="/menu" className="block py-2 cursor-pointer hover:text-brightColor">Menu</Link>
          <Link to="/about_us" className="block py-2 cursor-pointer hover:text-brightColor">About us</Link>
          <Link to="/products" className="block py-2 cursor-pointer hover:text-brightColor">Products</Link>
          <Link to="/review" className="block py-2 cursor-pointer hover:text-brightColor">Review</Link>
          {username ? (
            <>
              <span className="block py-2 text-white">{username}</span>
              <button onClick={handleLogout} className="block py-2 text-red-500">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 cursor-pointer hover:text-brightColor">Login</Link>
              <Link to="/register" className="block py-2 cursor-pointer hover:text-brightColor">Register</Link>
            </>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar;