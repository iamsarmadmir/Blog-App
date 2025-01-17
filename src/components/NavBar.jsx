import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default NavBar;
