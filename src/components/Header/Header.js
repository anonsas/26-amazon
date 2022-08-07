import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../constants/index';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

import './Header.scss';

function Navigation() {
  return (
    <header>
      <div className="header-top">
        <div className="logo-container">
          <img src={images.logo} alt="logo" className="logo" />
        </div>

        <div className="search-container">
          <input type="text" className="search__input" />
          <SearchIcon className="search__icon" />
        </div>

        <div className="account-container">
          <div className="account">
            <p>Hello, Igor Lukjanov</p>
            <p>Account & Lists</p>
          </div>

          <div className="orders">
            <p>Returns</p>
            <p>& Orders</p>
          </div>

          <div className="cart">
            <span>0</span>
            <ShoppingCartIcon className="cart__icon" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="header-bottom"></div>
      {/* <nav className="primary-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav> */}
    </header>
  );
}

export default Navigation;
