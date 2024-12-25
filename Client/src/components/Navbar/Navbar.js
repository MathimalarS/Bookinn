import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Navbar/logo.png'
import '../Navbar/Navbar.css'; // Your custom CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <img src={logo} alt="Hotel Logo" className="logo" />
        <span className="app-name">Bookinn</span>
      </div>
      
      {/* Right Section */}
      <div className="navbar-right">
        <button className="stays-btn">
          <i className="fas fa-bed"></i> Stays
        </button>
        <Link to="/login" className="auth-link">Login</Link>
        <Link to="/signup" className="auth-link">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
