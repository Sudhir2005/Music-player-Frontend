import React from 'react';
import './Navbar.css';
import logo from './download.png';


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
                <img src={logo} alt="Logo" />
        </div>
      <div className="navbar-brand">Cheems.<i>Play</i></div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Search</a></li>
        <li className="nav-item"><a href="#">Library</a></li>
        <li className="nav-item"><a href="#">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
