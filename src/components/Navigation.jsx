import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={() => scrollToSection('home')}>
            Visit Penang
          </a>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#tourist-spots" onClick={() => scrollToSection('tourist-spots')}>
                Tourist Spots
              </a>
            </li>
            <li>
              <a href="#food-and-beverages" onClick={() => scrollToSection('food-and-beverages')}>
                Food & Beverages
              </a>
            </li>
            <li>
              <a href="#hotels" onClick={() => scrollToSection('hotels')}>
                Hotels
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => scrollToSection('gallery')}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => scrollToSection('blog')}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

