import React from 'react';
import './BottomFooter.css';

const bottomFooterLinks = [
  { label: 'Amazon Music', description: 'Stream millions of songs', href: '' },
  { label: 'Amazon Ads', description: 'Reach customers wherever they spend their time', href: '' },
  { label: '6pm', description: 'Score deals on fashion brands', href: '' },
  { label: 'AbeBooks', description: 'Books, art & collectibles', href: '' },
  { label: 'ACX', description: 'Audiobook Publishing Made Easy', href: '' },
  { label: 'Sell on Amazon', description: 'Start a Selling Account', href: '' },
  { label: 'Veeqo', description: 'Shipping Software Inventory Management', href: '' },
  { label: 'Amazon Business', description: 'Everything For Your Business', href: '' },
  { label: 'AmazonGlobal', description: 'Ship Orders Internationally', href: '' },
  { label: 'Home Services', description: 'Experienced Pros Happiness Guarantee', href: '' },
  { label: 'Amazon Web Services', description: 'Scalable Cloud Computing Services', href: '' },
  { label: 'Audible', description: 'Listen to Books & Original Audio Performances', href: '' },
  { label: 'Box Office Mojo', description: 'Find Movie Box Office Data', href: '' },
  { label: 'Goodreads', description: 'Book reviews & recommendations', href: '' },
  { label: 'IMDb', description: 'Movies, TV & Celebrities', href: '' },
  { label: 'IMDbPro', description: 'Get Info Entertainment Professionals Need', href: '' },
  { label: 'Kindle Direct Publishing', description: 'Indie Digital & Print Publishing Made Easy', href: '' },
  { label: 'Prime Video Direct', description: 'Video Distribution Made Easy', href: '' },
  { label: 'Shopbop', description: 'Designer Fashion Brands', href: '' },
  { label: 'Woot!', description: 'Deals and Shenanigans', href: '' },
  { label: 'Zappos', description: 'Shoes & Clothing', href: '' },
  { label: 'Ring', description: 'Smart Home Security Systems', href: '' },
  { label: 'eero WiFi', description: 'Stream 4K Video in Every Room', href: '' },
  { label: 'Blink', description: 'Smart Security for Every Home', href: '' },
  { label: 'Neighbors App', description: 'Real-Time Crime & Safety Alerts', href: '' },
  { label: 'Amazon Subscription Boxes', description: 'Top subscription boxes – right to your door', href: '' },
  { label: 'PillPack', description: 'Pharmacy Simplified', href: '' },
];

const BottomFooter = () => {
  return (
    <div className="bottom-footer-container">
      <div className="bottom-footer">
        {bottomFooterLinks.map((link, index) => (
          <div key={index} className="footer-item">
            <a href={link.href} className="footer-title">{link.label}</a>
            <a href={link.href} className="footer-description">{link.description}</a>
          </div>
        ))}
      </div>
      <div className="footer-terms">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Consumer Health Data Privacy Disclosure</a>
        <a href="#">Your Ads Privacy Choices</a>
      </div>
      <div className="footer-copyright">
        &copy; 1996-2024, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default BottomFooter;
