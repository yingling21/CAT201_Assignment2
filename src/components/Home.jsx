import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="hero">
        <img 
          src="./images/penang-hero.jpg" 
          alt="Penang cityscape at night" 
          className="hero-image"
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Penang</h1>
          <p>Discover the Pearl of the Orient</p>
          <button className="explore-button">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

