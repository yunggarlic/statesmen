import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/home">
          <h1>STATESMEN!</h1>
        </Link>
        <span>
          <Link className="nav-link" to="/home">
            Episodes
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
