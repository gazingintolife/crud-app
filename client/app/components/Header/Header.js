import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className = "container mb-1 p-1 shadow bg-white rounded text-center">
    <button class="btn btn-Light p-3"><Link className = "container" to="/" style={{ textDecoration: 'none' }}><p className = "fs-2">Home</p></Link></button>
    <hr/>
  </header>
);

export default Header;
