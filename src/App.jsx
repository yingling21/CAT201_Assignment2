import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import TouristSpots from './components/TouristSpots';
import FoodAndBeverages from './components/FoodAndBeverages';
import Hotels from './components/Hotels';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <TouristSpots />
        <FoodAndBeverages />
        <Hotels />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;