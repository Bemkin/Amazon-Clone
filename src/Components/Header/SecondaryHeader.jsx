import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './SecondaryHeader.css'

const SecondaryHeaderSection = ({ children }) => (
  <div className="secondary-header__section">
    {children}
  </div>
);

const SecondaryHeader = () => (
  <nav className="secondary-header">
    <div className="secondary-header__container">
      <div className="secondary-header__left">
        <SecondaryHeaderSection>
          <Link to="/Amazon-Clone/">
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
);

export default SecondaryHeader;
