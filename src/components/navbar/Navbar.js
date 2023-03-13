import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/loggains">Log Gains</Link>
        </li>
        <li>
          <Link to="/inspiration">Inspiration</Link>
        </li>
        <li>
          <Link to="/watch">Watch</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

