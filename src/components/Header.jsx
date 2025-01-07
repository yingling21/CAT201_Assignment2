import React from 'react';
import  './Header.css';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <button
              onClick={() => scrollToSection('tourist-spots')}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Tourist Spots
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('food-and-beverages')}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Food & Beverages
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('hotels')}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Hotels
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('blog')}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Gallery
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}