import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className = "container mb-5 p-3 shadow bg-white rounded text-center">
    <Link className = "container" to="/"><h3>Home</h3></Link>
    <hr/>
  </header>
);

export default Header;
