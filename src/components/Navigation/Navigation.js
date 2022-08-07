import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
  return (
    <header>
      <nav className="primary-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
