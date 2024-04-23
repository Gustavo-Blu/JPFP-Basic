import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>FS-App-Template</h1>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/">Home</Link>
        <Link to="/robots">Robots</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
    <hr />
  </div>
);

export default Navbar;
