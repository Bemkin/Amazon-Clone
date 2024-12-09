import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Header.css';
import SecondaryHeader from './SecondaryHeader'; 
import { useCart } from '../../Pages/Cart/CartContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Utils/FirebaseConfig';

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

const Header = ({ user, setUser }) => {  {/* Ensure setUser is a prop */}
  const { cartCount } = useCart();
  const navigate = useNavigate();

  // Function to get the first name from the email
  const getFirstName = (email) => {
    if (!email) return 'sign in';
    const namePart = email.split('@')[0];
    const firstName = namePart.split('.')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1); // Capitalize the first letter
  };

  // Function to handle sign-out
  const handleSignOut = async () => {
    try {
      console.log('Attempting to sign out...');
      await signOut(auth);
      setUser(null);
      console.log('Sign out successful.');
      navigate('/Amazon-Clone/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="/Amazon-logo-white.svg.png" alt="Amazon" height="30" />
          </Link>
        </div>
        <div className="header__location">
          <i className="fas fa-map-marker-alt"></i>
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
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <Dropdown buttonLabel="EN" icon="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg">
          <Link to="/">EN</Link>
          <Link to="/">ES</Link>
          <Link to="/">FR</Link>
        </Dropdown>
        <Dropdown buttonLabel={<><span>Hello, {user ? getFirstName(user.email) : 'sign in'}</span><br /><strong>Account & Lists</strong></>}>
          {user ? (
            <>
              <Link to="/">Orders</Link>
              <Link to="/">Wishlist</Link>
              <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/auth">Sign In</Link>
            </>
          )}
        </Dropdown>
        <Dropdown buttonLabel={<><span>Returns</span><br /><strong>& Orders</strong></>}>
          <Link to="/orders">Your Orders</Link>
          <Link to="/returns">Returns & Refunds</Link>
        </Dropdown>
        <div className="header__cart">
          <Link to="/cart" className="cart-link">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{cartCount}</span> 
          </Link>
        </div>
      </header>
      <SecondaryHeader />
    </>
  );
};

export default Header;
