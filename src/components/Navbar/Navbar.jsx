import "./Navbar.css";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">My Website</a>
      <ul className="navbar-nav">
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;