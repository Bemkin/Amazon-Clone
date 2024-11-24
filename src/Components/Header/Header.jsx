import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Header.css';

const Dropdown = ({ children, buttonLabel, icon }) => (
  <div className="header__dropdown">
    <div className="dropdown">
      <button className="dropbtn">
        {icon && <img src={icon} alt="icon" height="20" className='dropdown-icon' />} {buttonLabel}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  </div>
);

const SecondaryHeaderSection = ({ children }) => (
  <div className="secondary-header__section">
    {children}
  </div>
);

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="../public/Amazon-logo-white.svg.png" alt="Amazon" height="30" />
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
        <Dropdown buttonLabel="EN" icon="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg">
          <Link to="/">EN</Link>
          <Link to="/">ES</Link>
          <Link to="/">FR</Link>
        </Dropdown>
        <Dropdown buttonLabel={<><span>Hello, sign in</span><br /><strong>Account & Lists</strong></>}>
          <Link to="/">Account</Link>
          <Link to="/">Orders</Link>
          <Link to="/">Wishlist</Link>
        </Dropdown>
        <Dropdown buttonLabel={<><span>Returns</span><br /><strong>& Orders</strong></>}>
          <Link to="/orders">Your Orders</Link>
          <Link to="/returns">Returns & Refunds</Link>
        </Dropdown>
        <div className="header__cart">
          <Link to="/cart" className="cart-link">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">0</span> {/* Placeholder for cart count */}
          </Link>
        </div>
      </header>
      
      <nav className="secondary-header">
        <div className="secondary-header__container">
          <div className="secondary-header__left">
            <SecondaryHeaderSection>
              <Link to="/">
                <i className="fa fa-bars" aria-hidden="true"></i> All
              </Link>
            </SecondaryHeaderSection>
            <SecondaryHeaderSection><Link to="/deals">Today's Deals</Link></SecondaryHeaderSection>
            <SecondaryHeaderSection><Link to="/customer-service">Customer Service</Link></SecondaryHeaderSection>
            <SecondaryHeaderSection><Link to="/registry">Registry</Link></SecondaryHeaderSection>
            <SecondaryHeaderSection><Link to="/gift-cards">Gift Cards</Link></SecondaryHeaderSection>
            <SecondaryHeaderSection><Link to="/sell">Sell</Link></SecondaryHeaderSection>
          </div>
          <div className="secondary-header__right">
            <SecondaryHeaderSection><Link to="/black-friday-deals">Shop Black Friday deals</Link></SecondaryHeaderSection>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
