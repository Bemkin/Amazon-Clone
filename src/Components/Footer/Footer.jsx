import React from 'react';
import './Footer.css';
import BottomFooter from './BottomFooter';


const FooterSection = ({ title, links }) => {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      {links.map((link, index) => (
        <a key={index} href={link.href}>{link.label}</a>
      ))}
    </div>
  );
};

const footerLinks = {
  getToKnowUs: [
    { label: 'Careers', href: '' },
    { label: 'Blog', href: '' },
    { label: 'About Amazon', href: '' },
    { label: 'Investor Relations', href: '' },
    { label: 'Amazon Devices', href: '' },
    { label: 'Amazon Science', href: '' },
  ],
  makeMoneyWithUs: [
    { label: 'Sell products on Amazon', href: '' },
    { label: 'Sell on Amazon Business', href: '' },
    { label: 'Sell apps on Amazon', href: '' },
    { label: 'Become an Affiliate', href: '' },
    { label: 'Advertise Your Products', href: '' },
    { label: 'Self-Publish with Us', href: '' },
    { label: 'Host an Amazon Hub', href: '' },
    { label: '› See More Make Money with Us', href: '' },
  ],
  amazonPaymentProducts: [
    { label: 'Amazon Business Card', href: '' },
    { label: 'Shop with Points', href: '' },
    { label: 'Reload Your Balance', href: '' },
    { label: 'Amazon Currency Converter', href: '' },
  ],
  letUsHelpYou: [
    { label: 'Amazon and COVID-19', href: '' },
    { label: 'Your Account', href: '' },
    { label: 'Your Orders', href: '' },
    { label: 'Shipping Rates & Policies', href: '' },
    { label: 'Returns & Replacements', href: '' },
    { label: 'Manage Your Content and Devices', href: '' },
    { label: 'Help', href: '' },
  ],
};

function Footer() {
  return (
    <>
      <button className="Back-to-top-button">Back to top</button>
      <footer className="footer">
        <div className="footer-top">
          <FooterSection title="Get to Know Us" links={footerLinks.getToKnowUs} />
          <FooterSection title="Make Money with Us" links={footerLinks.makeMoneyWithUs} />
          <FooterSection title="Amazon Payment Products" links={footerLinks.amazonPaymentProducts} />
          <FooterSection title="Let Us Help You" links={footerLinks.letUsHelpYou} />
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-logo">
            <img src="67d4872d01fa284595d32c0d9cd6fad1.png" alt="Amazon" />
          </div>
          <div className="footer-bottom-links">
            <div className="footer-link">
              <div className="footer-box">
                <i className="fas fa-globe"></i>
                <select id="language-select">
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <div className="footer-link">
              <div className="footer-box">
                <i className="fas fa-dollar-sign"></i>
                <a href="#currency-select">USD - U.S. Dollar</a>
              </div>
            </div>
            <div className="footer-link">
              <div className="footer-box">
                <i className="fas fa-flag-usa"></i>
                <a href="#country-select">United States</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
      <BottomFooter/>
      
    </>
  );
}

export default Footer;
