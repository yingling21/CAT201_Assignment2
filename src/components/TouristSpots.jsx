'use client';

import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TouristSpots.css';

function TouristSpots() {
  const [activeCategory, setActiveCategory] = useState('cultural');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const categories = {
    cultural: {
      title: "Cultural Attractions",
      spots: [
        {
          name: "Kek Lok Si Temple",
          description: "One of Southeast Asia's largest Buddhist temples, Kek Lok Si is a majestic hilltop complex featuring intricately designed halls, pavilions, and a towering statue of the Goddess of Mercy (Kuan Yin).",
          address: "Kek Lok Si, Air Itam, Penang, Malaysia",
          image: "./images/kek-lok-si-temple.jpg"
        },
        {
          name: "Khoo Kongsi",
          description: "An ornate Chinese clan house that highlights the rich heritage and craftsmanship of the Khoo clan, featuring intricate carvings and detailed architecture.",
          address: "18 Cannon Square, George Town, Penang, Malaysia",
          image: "./images/khoo-kongsi.jpg"
        },
        {
          name: "Chinatown Penang",
          description: "Chinatown in Georgetown is a vibrant area filled with heritage shophouses, temples, and markets. It reflects Penang's Chinese heritage and offers visitors a glimpse into traditional Chinese culture, cuisine, and architecture.",
          address: "Chulia Street, George Town, Penang, Malaysia",
          image: "./images/chinatown.jpg"
        },
        {
          name: "Pinang Peranakan Mansion",
          description: "A museum that showcases the opulent lifestyle of the Peranakan (Straits Chinese) community, featuring exquisite antiques and collectibles.",
          address: "Church Street, George Town, Penang, Malaysia",
          image: "./images/peranakan-culture.jpg"
        },
        {
          name: "Kapitan Keling Mosque",
          description: "Built in the early 19th century, this iconic mosque is known for its stunning Mughal-style architecture and significance to Penang's Islamic community.",
          address: "14 Buckingham Street, 10200 Georgetown, Pulau Pinang.",
          image: "./images/Masjid-Kapitan-Keling.jpg"
        },
        {
          name: "Sri Mahamariamman Temple",
          description: "The oldest Hindu temple in Penang, adorned with colorful sculptures of Hindu deities, reflecting the vibrant culture of the Indian community.",
          address: "Queen Street, 10200 Georgetown, Pulau Pinang.",
          image: "./images/Sri-Maha-Mariamman-Temple.jpg"
        },
        {
          name: "Penang House of Music",
          description: "An interactive gallery that celebrates Penang’s diverse musical heritage, providing insights into the island's cultural tapestry.",
          address: "KOMTAR, Jalan Penang, 10000 Georgetown, Pulau Pinang.",
          image: "./images/House-of-Music.jpg"
        },
        {
          name: "Sun Yat Sen Museum",
          description: "A historic house where Dr. Sun Yat Sen planned revolutionary activities, preserving artifacts related to Penang’s role in China’s revolution.",
          address: "120 Armenian Street, 10200 Georgetown, Pulau Pinang.",
          image: "./images/sun-yat-sen-museum.jpg"
        },
        {
          name: "Fort Cornwallis",
          description: "The largest standing fort in Malaysia, offering historical exhibits and insights into Penang’s colonial past and early settlement history.",
          address: "Padang Kota Lama, 10200 Georgetown, Pulau Pinang.",
          image: "./images/fort-cornwallis.jpg"
        }
      ]
    },
    modern: {
      title: "Modern Attractions",
      spots: [
        {
          name: "Penang Hill",
          description: "Panoramic views of Georgetown and lush greenery.",
          address: "Penang Hill, Air Itam, Penang, Malaysia",
          image: "./images/penang-hill.jpg"
        },
        {
          name: "KOMTAR Tower",
          description: "The tallest building in Penang, offering observation decks and a variety of attractions.",
          address: "Komtar, George Town, Penang, Malaysia",
          image: "./images/komtar-tower.jpg"
        },
        {
          name: "The Top Penang",
          description: "A modern entertainment hub located in Komtar Tower, featuring attractions like the Rainbow Skywalk, Jurassic Research Center and Tech Dome Penang.",
          address: "Komtar Tower, George Town, Penang, Malaysia",
          image: "./images/the-top-penang.jpg"
        },
        {
          name: "Gurney Drive",
          description: "A vibrant waterfront promenade with shopping malls and hawker food.",
          address: "Gurney Drive, George Town, Penang, Malaysia",
          image: "./images/gurney-drive.jpg"
        },
        {
          name: "Penang Avatar Secret Garden",
          description: "A mesmerizing modern garden illuminated with colorful LED lights inspired by the movie ‘AVATAR', offering a magical nighttime experience.",
          address: "Tanjung Tokong, 10470 Pulau Pinang.",
          image: "./images/avatar_penang_secret_garden.jpg"
        },
        {
          name: "Escape Penang",
          description: "A modern adventure park offering thrilling outdoor activities such as zip-lining, obstacle courses, water slides, and the world's longest tube water slide.",
          address: "828, Jalan Teluk Bahang, 11050 Teluk Bahang, Pulau Pinang.",
          image: "./images/ESCAPEPenang.jpg"
        },
        {
          name: "Chew Jetty",
          description: "A modernized yet culturally significant attraction, Chew Jetty is part of the Clan Jetties of Penang, showcasing traditional stilt houses over the water.",
          address: "Pengkalan Weld, 10300 Georgetown, Pulau Pinang.",
          image: "./images/chew-jetty.jpg"
        },
        {
          name: "Teach Dome Penang",
          description: "A state-of-the-art science center with interactive exhibits and activities focused on technology, innovation, and education.",
          address: "KOMTAR, Level 5, Jalan Penang, 10000 Georgetown, Pulau Pinang.",
          image: "./images/tech-dome-penang.jpg"
        },
        {
          name: "Dark Mansion - 3D Glow in the Dark Museum",
          description: "Malaysia's first glow-in-the-dark museum, showcasing luminous art and creative installations that come alive under UV light.",
          address: "145, Lebuh Kimberley, 10100 Georgetown, Pulau Pinang..",
          image: "./images/DarkMansionMuseum.jpg"
        },
      ]
    },
    streetArt: {
      title: "Street Art",
      spots: [
        {
          name: "Kids on Bicycle",
          description: "A famous street art mural by Ernest Zacharevic.",
          address: "Lebuh Armenian, George Town, Penang, Malaysia",
          image: "./images/kids-bicycle.jpg"
        },
        {
          name: "Boy on Chair",
          description: "A whimsical street art installation.",
          address: "Lebuh Cannon, George Town, Penang, Malaysia",
          image: "./images/boy-on-chair.jpg"
        },
        {
          name: "Brother and Sister on Swing",
          description: "A creative mural of children swinging.",
          address: "Step by Step Lane, George Town, Penang, Malaysia",
          image: "./images/brother-sister-on-swing.jpg"
        },
        {
          name: "Little Boy and Dinosaur",
          description: "A cute mural of a boy and his dinosaur.",
          address: "Ah Quee Street, George Town, Penang, Malaysia",
          image: "./images/boy-pet-dinosaur-penang.jpg"
        },
        {
          name: "Wo Ai Nee / The Cultural Girls",
          description: "This mural depicts three girls in traditional cultural attire (Malay, Chinese, and Indian), representing Penang's multicultural harmony and unity.",
          address: "15, Lebuh Armenian, 10300 Georgetown, Pulau Pinang.",
          image: "./images/cultural-girls-penang.jpg"
        },
        {
          name: "The Procession",
          description: "In 2009, the city hired a Kuala Lumpur firm to commission 52 metal rod art installations around George Town  – each piece representing the city’s history and culture.",
          address: "Lebuh Armenian, 10200 Georgetown, Pulau Pinang.",
          image: "./images/the-procession.jpg"
        },
        {
          name: "Boy on Motorbike",
          description: "A mural depicting a boy sitting on a vintage motorcycle, blending with the surrounding environment to create a striking image.",
          address: "Lebuh Ah Quee, Georgetown, 10200 Pulau Pinang.",
          image: "./images/Boy-on-motorbike.jpg"
        },
        {
          name: "The Real Bruce Lee Would Never Do That",
          description: "This humorous mural portrays a young Bruce Lee playfully kicking a stray cat, blending pop culture with Penang's love for its street cats. The title emphasizes that the legendary martial artist would never actually harm an animal, adding a layer of wit to the artwork.",
          address: "Gat Lebuh Armenian, 10200 Georgetown, Pulau Pinang.",
          image: "./images/real-bruce-lee-penang-street-art.jpg"
        },
        {
          name: "Folklore By The Sea",
          description: "The mural at the end of the Chew Jetty, one of the seven piers here, each representing a Chinese family, or clan, that settled in George Town.",
          address: "Weld Quay (Pengkalan Weld), 10300 Georgetown, Pulau Pinang.",
          image: "./images/chew-jetty-penang.jpg"
        }
      ]
    },
    nature: {
      title: "Nature Attractions",
      spots: [
        {
          name: "Penang National Park",
          description: "A pristine natural reserve offering lush greenery, scenic trails, and diverse wildlife. Visitors can hike to attractions like Monkey Beach and the iconic Penang National Park Canopy Walk.",
          address: "Pantai Kerachut, Penang National Park, Malaysia",
          image: "./images/penang-national-park.jpg"
        },
        {
          name: "Penang Botanic Gardens",
          description: "Known as the ‘Waterfall Gardens’ this serene spot features a variety of tropical plants, a waterfall, and walking trails, offering a peaceful escape for nature lovers.",
          address: "Botanic Gardens, George Town, Penang, Malaysia",
          image: "./images/botanic-garden.jpg"
        },
        {
          name: "Tanjung Bungah Beach",
          description: "A modern mosque built on stilts over the sea, featuring unique architectural design and stunning views of the coastline.",
          address: "Tanjung Bungah, Penang, Malaysia",
          image: "./images/tanjung-bunga-beach.jpg"
        },
        {
          name: "Batu Ferringhi Beach",
          description: "One of the most famous beaches in Penang, Batu Ferringhi offers a long stretch of sandy shores, clear waters, and a variety of activities like jet-skiing, parasailing, and beach volleyball.",
          address: "Batu Ferringhi, Penang, Malaysia",
          image: "./images/batu-ferringhi.jpeg"
        },
        {
          name: "Beach Esen (Pantai Esen)",
          description: "A unique spot near Bayan Lepas where visitors can relax on the beach while watching airplanes fly overhead.",
          address: "Permatang Damar Laut, 11960 Batu Maung, Pulau Pinang",
          image: "./images/beach-esen.jpg"
        },
        {
          name: "Balik Pulau Countryside",
          description: " A scenic area on the western side of Penang Island, featuring lush paddy fields, rolling hills, and durian orchards, offering a rustic charm for those who love rural landscapes.",
          address: "Balik Pulau, 11010 Pulau Pinang.",
          image: "./images/balik-pulau.jpg"
        }
      ]
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 3 : Math.max(0, categories[activeCategory].spots.length - 3)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < categories[activeCategory].spots.length ? prevIndex + 3 : 0
    );
  };

  const handleSpotClick = (spot) => {
    setSelectedSpot(spot);
  };

  const closeModal = () => {
    setSelectedSpot(null);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const activeCategoryData = categories[activeCategory] || { spots: [] };

  return (
    <div id="tourist-spots" className="tourist-spots">
      <h1 className="text-4xl font-bold mb-8">Tourist Spots in Penang</h1>

      <div className="category-tabs">
        {Object.entries(categories).map(([key, { title }]) => (
          <button
            key={key}
            className={`category-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="spots-carousel-container">
        <button
          className="carousel-button previous"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div {...handlers} className="spots-carousel">
          {activeCategoryData.spots.slice(currentIndex, currentIndex + 3).map((spot, index) => (
            <div
              key={index}
              className="spot-card"
              onClick={() => handleSpotClick(spot)}
            >
              <img src={spot.image} alt={spot.name} />
              <div className="spot-content">
                <h2>{spot.name}</h2>
                <p>{spot.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-button next"
          onClick={handleNext}
          disabled={currentIndex + 3 >= activeCategoryData.spots.length}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(activeCategoryData.spots.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {selectedSpot && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedSpot.image}
              alt={selectedSpot.name}
              className="modal-image"
            />
            <h2>{selectedSpot.name}</h2>
            <p><strong>Description:</strong> {selectedSpot.description}</p>
            <p><strong>Address:</strong> {selectedSpot.address}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TouristSpots;
