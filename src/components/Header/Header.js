import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { images } from '../../constants/index';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { selectItems } from '../../features/cartSlice';

function Navigation() {
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="header-top">
        <Link to="/" className="logo-container">
          <img src={images.logo} alt="logo" className="logo" />
        </Link>

        <div className="search-container">
          <input type="text" className="search__input" />
          <SearchIcon className="search__icon" />
        </div>

        <div className="account-container">
          <Link to="/account" className="account">
            <p>Hello, Igor Lukjanov</p>
            <p>Account & Lists</p>
          </Link>

          <Link to="/orders" className="orders">
            <p>Returns</p>
            <p>& Orders</p>
          </Link>

          <Link to="/checkout" className="cart">
            <span>{items.length}</span>
            <ShoppingCartIcon className="cart__icon" />
            <p>Cart</p>
          </Link>
        </div>
      </div>

      <div className="header-bottom">
        <p>
          <MenuIcon className="menu__icon" /> All
        </p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </header>
  );
}

export default Navigation;
