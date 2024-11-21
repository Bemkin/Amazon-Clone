import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" height="30" />
        </Link>
      </div>
      <div className="header__location">
        <i className="fas fa-map-marker-alt"></i> {/* Location pin icon */}
        <div>
          Deliver to <br />
          <strong>Ethiopia</strong>
        </div>
      </div>
      <div className="header__search-bar">
        <select className="search-select">
          <option value="all">All</option>
        </select>
        <input className="search-input" type="text" placeholder="Search Amazon" />
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i> {/* Search icon */}
        </button>
      </div>
      <div className="header__dropdown">
        <div className="dropdown">
          <button className="dropbtn">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" height="20" /> EN 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/">EN</Link>
            <Link to="/">ES</Link>
            <Link to="/">FR</Link>
          </div>
        </div>
      </div>
      <div className="header__dropdown">
        <div className="dropdown">
          <button className="dropbtn">
            Hello, sign in <br /> <strong>Account & Lists</strong>
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/">Account</Link>
            <Link to="/">Orders</Link>
            <Link to="/">Wishlist</Link>
          </div>
        </div>
      </div>
      <div className="header__orders">
        Returns <br /> <strong>& Orders</strong>
      </div>
      <div className="header__cart">
        <Link to="/cart" className="cart-link">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">0</span> {/* Placeholder for cart count */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
