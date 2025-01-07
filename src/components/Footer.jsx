import React from 'react';
import { ChevronRight, User } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const teammates = [
    "Ying Ling",
    "Joanne Loi",
    "Yee Xuan",
    "Yi Jie"
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          {['Home', 'Tourist Spots', 'Food & Beverages', 'Hotels', 'Gallery', 'Blog'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
              <ChevronRight className="nav-icon" size={16} />
              {item}
            </a>
          ))}
        </nav>
        <div className="teammates">
          <h3>Team Members:</h3>
          <ul>
            {teammates.map((name, index) => (
              <li key={index}>
                <User className="teammate-icon" size={16} />
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-right">
          <p className="copyright">
            &copy; 2024 Visit Penang | CAT201 Assignment 2
          </p>
          <div className="footer-logo">
            <img 
              src="/images/visit-penang-logo.jpg" 
              alt="Visit Penang Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

