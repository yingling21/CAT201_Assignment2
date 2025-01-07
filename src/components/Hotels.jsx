'use client'

import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import './Hotels.css';

const Hotels = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [budget, setBudget] = useState('');
  const [area, setArea] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const categories = {
    all: { title: "All Hotels" },
    budget: { title: "Budget Friendly" },
    characteristic: { title: "Characteristic Hotels" },
    luxury: { title: "Luxury Hotels" }
  };

  const hotels = [
    {
      name: "LiLi Stay Lebuh Melayu",
      description: "Popular points of interest near the inn include 1st Avenue Penang, Rainbow Skywalk at Komtar and Penang Times Square. Penang International Airport is 14 km away.",
      price: 48,
      location: "georgetown",
      address: "33, Lebuh Melayu, 10100 George Town, Malaysia",
      image: "./images/budget1.jpg",
      category: ["all", "budget"],
      bookingUrl: "https://www.booking.com/searchresults.en-gb.html?aid=318615&label=English_Malaysia_EN_MY_28546570465-jELQnVdAMC_8Kt9BEgFNcAS634117833534%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-209715373945%3Alp1029509%3Ali%3Adec%3Adm%3Aag28546570465%3Acmp339879625&gclid=CjwKCAiA-Oi7BhA1EiwA2rIu2wFQt3TDfdi5xjddjhbbaEk05y89WUIHp9u0AnkzP2KY339rVN4nyhoCG1QQAvD_BwE&highlighted_hotels=12672877&checkin=2025-01-25&redirected=1&city=-2403065&hlrd=with_av&source=hotel&checkout=2025-01-26&keep_landing=1&sid=8647e44304378a84df0697400ec8a234"
    },
    {
      name: "The Terraces by Aayu",
      description: "Situated in George Town, 2.2 km from Northam Beach, The Terraces by Aayu features air-conditioned accommodation and a shared lounge. ",
      price: 48,
      location: "georgetown",
      address: "17, Lorong Seckchuan, 10200 George Town, Malaysia",
      image: "./images/budget2.jpg",
      category: ["all", "budget"],
      bookingUrl: "https://www.booking.com/hotel/my/the-terraces-by-aayu.en-gb.html?aid=373437&label=penang-ZwRTrfocZGpEYSNZdWAvFQS388510587062%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-138369316%3Alp1029509%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGWxi-Yo4Tolk&sid=8647e44304378a84df0697400ec8a234"
    },
    {
      name: "Homs Female Hostel",
      description: "Located within 2.1 km of Northam Beach and 600 metres of Wonderfood Museum, Homs Female Hostel provides rooms with air conditioning and a shared bathroom in George Town.",
      price: 49,
      location: "georgetown",
      address: "17b, Lorong Chulia, 10200 George Town, Malaysia",
      image: "./images/budget3.jpg",
      category: ["all", "budget"],
      bookingUrl: "https://www.booking.com/hotel/my/homs-female-cottage.en-gb.html?aid=373437&label=penang-ZwRTrfocZGpEYSNZdWAvFQS388510587062%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-138369316%3Alp1029509%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGWxi-Yo4Tolk&sid=8647e44304378a84df0697400ec8a234#availability"
    },
    {
      name: "Rasa Motel",
      description: "Nested within private gardens just 3 minutes from Batu Ferringhi Beach, Rasa Motel offers accommodation in Batu Ferringhi. Guests can enjoy meals from the in-house restaurant. Free WiFi is available throughout the property.",
      price: 148,
      location: "batu-ferringhi",
      address: "186-G26 Ferringhi Plaza, Jalan Batu Ferringhi 11100 Pulau Pinang, 11100 Batu Ferringhi, Malaysia",
      image: "./images/budget4.jpg",
      category: ["all", "budget"],
      bookingUrl: "https://www.booking.com/hotel/my/rasa-motel-batu-feringgi.en-gb.html?aid=373437&label=city-batu-feringgi-chOH7h1y5EHNUyMx2OSX6AS538131738417%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-58676717840%3Alp1029509%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGWxi-Yo4Tolk&sid=8647e44304378a84df0697400ec8a234&dest_id=-2403097&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&nflt=sth%3D7&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1735882594&srpvid=8046276e826b0e6c&type=total&ucfs=1&"
    },
    {
      name: "TIDO @ Penang",
      description: "Experience Penang's rich history in this restored shophouse.",
      price: 90,
      location: "georgetown",
      address: "106 Jalan Argyll, George Town, Penang Island 10050 Malaysia",
      image: "./images/budget5.jpg",
      category: ["all", "budget"],
      bookingUrl: "https://www.tripadvisor.com.my/Hotel_Review-g298303-d8864120-Reviews-TIDO_Penang-George_Town_Penang_Island_Penang.html"
    },
    {
      name: "Value Inn",
      description: "A cozy inn located in the heart Butterworth town.",
      price: 90,
      location: "butterworth",
      address: "2725 Lorong Kubur, 12200 Butterworth, Malaysia",
      image: "./images/budget6.jpg",
      category: ["all", "budget"],
      bookingUrl: "https://www.booking.com/hotel/my/value-inn-homestay.en-gb.html?aid=373437&label=penang-IS8QSvRXOqUSH3mh1yaEwQS388510587062%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-138465696%3Alp1029509%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGWxi-Yo4Tolk&sid=8647e44304378a84df0697400ec8a234&all_sr_blocks=0_0_2_0_0&checkin=2025-01-25&checkout=2025-01-26&dest_id=996&dest_type=region&dist=0&group_adults=2&group_children=0&hapos=4&highlighted_blocks=0_0_2_0_0&hpos=4&matching_block_id=0_0_2_0_0&nflt=sth%3D7&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=0_0_2_0_0__9949&srepoch=1735883310&srpvid=898c28d2c7890a69&type=total&ucfs=1&"
    },
    {
      name: "Cheong Fatt Tze, The Blue Mansion",
      description: "Theme: Heritage Elegance. A restored 19th-century mansion with vibrant indigo walls, The Blue Mansion is a masterpiece of Chinese architecture.",
      price: 500,
      location: "batu-ferringhi",
      address: "14, Leith Street, George Town, Penang Island 10200 Malaysia",
      image: "./images/cheong-fatt-tze.jpg",
      category: ["all", "characteristic"],
      bookingUrl: "https://www.cheongfatttzemansion.com/"
    },
    {
      name: "Macaalister Mansion",
      description: "Theme: Colonial Luxury Meets Contemporary Art. This boutique hotel is set in a colonial-era building with a modern twist. It features artistic decor, sculptures, and thematic rooms.",
      price: 800,
      location: "georgetown",
      address: "228, Jln Macalister, 10400 George Town, Pulau Pinang",
      image: "./images/macalister-mansion.jpg",
      category: ["all", "characteristic"],
      bookingUrl: "https://www.macalistermansion.com/"
    },
    {
      name: "Hotel Penaga",
      description: "Theme: Heritage Charm with Local Art. A boutique hotel showcasing locally sourced artwork and traditional elements, blending modern comfort with heritage aesthetics.",
      price: 122,
      location: "georgetown",
      address: "Jalan Hutton, George Town, 10050 George Town, Pulau Pinang",
      image: "./images/hotel-penaga.jpg",
      category: ["all", "characteristic"],
      bookingUrl: "https://www.guestreservations.com/hotel-penaga/booking?utm_source=google&utm_medium=cpc&utm_campaign=990032387&gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvDFU9V7Rd7Wal9_TsUhEPxLUNRFn1kkBdi5kwQQHv0sCc_ObbLGOM0aAowVEALw_wcB&ctTriggered=true"
    },
    {
      name: "Hotel Penaga",
      description: "Theme: Multi-Era Heritage. Housed in a collection of historical buildings from different eras, each room has a unique style reflecting its architectural heritage.",
      price: 555,
      location: "georgetown",
      address: "23, Lorong Love, George Town, 10200 George Town, Pulau Pinang",
      image: "./images/23-lovelane.jpg",
      category: ["all", "characteristic"],
      bookingUrl: "https://www.23lovelane.com/"
    },
    {
      name: "Malihom Private Estate",
      description: "Theme: Rustic Luxury in a Hilltop Retreat. A collection of converted rice barns offering a rustic yet luxurious escape in the lush countryside of Balik Pulau.",
      price: 600,
      location: "balik-pulau",
      address: "Kiri NT, 168, Jalan Bukit Penara, Mukim 6, 11000 Balik Pulau, Penang",
      image: "./images/malhom.jpg",
      category: ["all", "characteristic"],
      bookingUrl: "https://www.malihom.com/"
    },
    {
      name: "Boulder Valley Glamping",
      description: "Theme: Nature Meets Glamping. Unique glamping accommodations designed to bring guests closer to nature without compromising comfort.",
      price: 667,
      location: "teluk-bahang",
      address: "8, Jalan Teluk Bahang, Teluk Bahang, 11050, Pulau Pinang",
      image: "./images/boulder-valley.jpg",
      category: ["all", "characteristic"],
      bookingUrl: "https://www.malihom.com/"
    },
    {
      name: "Eastern & Oriental Hotel",
      description: "A historic colonial-era hotel with opulent suites, world-class dining, and stunning sea views.",
      price: 1500,
      location: "georgetown",
      address: "10, Lebuh Farquhar, George Town, 10200 George Town, Pulau Pinang",
      image: "./images/eastern-oriental-hotel.jpg",
      category: ["all", "luxury"],
      bookingUrl: "https://www.eohotels.com/"
    },
    {
      name: "The Prestige Hotel",
      description: "A modern luxury hotel inspired by Victorian designs with a touch of whimsical elegance.",
      price: 800,
      location: "georgetown",
      address: "8, Gat Lebuh Gereja, George Town, 10300 George Town, Pulau Pinang",
      image: "./images/the-prestige.jpg",
      category: ["all", "luxury"],
      bookingUrl: "https://theprestige.my/offers/?gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvAp8xur_-KCZ1mIbO2ePbOpbUN7IOo7zCjBCzRXxfFUB8rPlmgM4IEaApHvEALw_wcB"
    },
    {
      name: "The Edison George Town, Penang",
      description: "A boutique luxury hotel set in a restored colonial mansion offering personalized service and elegant interiors.",
      price: 693,
      location: "georgetown",
      address: "15 Lebuh Leith, George Town, Penang Island 10200 Malaysia",
      image: "./images/edison-georgetown.jpg",
      category: ["all", "luxury"],
      bookingUrl: "https://www.tripadvisor.com.my/Hotel_Review-g298303-d10619169-Reviews-The_Edison_George_Town_Penang-George_Town_Penang_Island_Penang.html"
    },
    {
      name: "Shangri-La's Rasa Sayang Resort & Spa",
      description: "A sprawling beachfront resort with tropical gardens, luxury suites, and a world-class spa.",
      price: 1800,
      location: "batu-ferringhi",
      address: "Jalan Batu Ferringhi, Kampung Tanjung Huma, 11100 Batu Ferringhi, Pulau Pinang",
      image: "./images/shangri-la-rasa-sayang.jpg",
      category: ["all", "luxury"],
      bookingUrl: "https://www.shangri-la.com/en/penang/rasasayangresort/?WT.mc_id=RSR_2024_SEAA-Malaysia_PMAX_GOOGLE_AON_PMAX-NA-TEXTLINK_AON-DOMESTIC_EN-NA&gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvC65qDZS0AWEs05TMzkGWtiQgEZQOxiPeT8ek_aSz0jUvQA2o6nbZ0aAl6bEALw_wcB&gclsrc=aw.ds"
    },
    {
      name: "Lexis Suites Penang",
      description: "All-suite hotel with private pools and steam rooms in every unit, offering privacy and exclusivity.",
      price: 1200,
      location: "teluk-kumbar",
      address: "28, Jalan Teluk Kumbar, 11920 Bayan Lepas, Pulau Pinang",
      image: "./images/lexis-suites.jpg",
      category: ["all", "luxury"],
      bookingUrl: "https://www.lexissuitespenang.com/"
    },
    {
      name: "Lone Pine Hotel",
      description: "A colonial-style boutique hotel located on the beachfront, combining luxury with a laid-back vibe.",
      price: 800,
      location: "batu-ferringhi",
      address: "97 Batu Ferringhi, 11100 Penang, Malaysia",
      image: "./images/lone-pine.jpg",
      category: ["all", "luxury"],
      bookingUrl: "https://www.lonepinehotel.com/"
    }
  ];

useEffect(() => {
    setFilteredHotels(hotels.filter(hotel => hotel.category.includes(activeCategory)));
}, [activeCategory]);

const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
});

const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 3 : Math.max(0, filteredHotels.length - 3)
    );
};

const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 < filteredHotels.length ? prevIndex + 3 : 0
    );
};

const handleSearch = (e) => {
    e.preventDefault();
    let results = hotels;

    if (budget) {
      results = results.filter(hotel => hotel.price <= parseInt(budget));
    }

    if (area) {
      results = results.filter(hotel => hotel.location.toLowerCase() === area.toLowerCase());
    }

    setFilteredHotels(results);
    setCurrentIndex(0);
};

useEffect(() => {
    if (selectedHotel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
}, [selectedHotel]);

return (
  <div id="hotels" className="hotels">
    <h1>Find Your Perfect Stay in Penang</h1>

    <form onSubmit={handleSearch} className="search-form">
      <div className="search-inputs">
        <input
          type="number"
          placeholder="Budget (MYR)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Area in Penang"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="search-input"
        />
          <button type="submit" className="search-button">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </form>

    <div className="category-tabs">
        {Object.entries(categories).map(([key, { title }]) => (
          <button key={key} className={`category-tab ${activeCategory === key ? 'active' : ''}`} onClick={() => {
              setActiveCategory(key);
              setCurrentIndex(0);
            }}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="hotels-carousel-container">
        <button className="carousel-button previous" onClick={handlePrevious} disabled={currentIndex === 0} >
          <ChevronLeft className="w-6 h-6" />
        </button>

      <div {...handlers} className="hotels-carousel">
        {filteredHotels.slice(currentIndex, currentIndex + 3).map((hotel, index) => (
          <div 
            key={index} 
            className="hotel-card"
            onClick={() => setSelectedHotel(hotel)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedHotel(hotel);
                }
              }}>
          <div className="hotel-image">
            <img src={hotel.image} alt={hotel.name} />
              </div>
              <div className="hotel-content">
                <h2>{hotel.name}</h2>
                <p className="description">{hotel.description}</p>
                <div className="hotel-details">
                  <p className="price">Price: MYR {hotel.price} per night</p>
                  <p className="location">Location: {hotel.location}</p>
                  <span className="view-more">Click to view more</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button next" 
          onClick={handleNext}
          disabled={currentIndex + 3 >= filteredHotels.length}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(filteredHotels.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

{selectedHotel && (
        <div className="modal-overlay" onClick={() => setSelectedHotel(null)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedHotel(null)} aria-label="Close modal">
              <X className="w-6 h-6" />
            </button>
            <div className="modal-image">
              <img src={selectedHotel.image} alt={selectedHotel.name} />
            </div>
            <div className="modal-details">
              <h2>{selectedHotel.name}</h2>
              <p className="description">{selectedHotel.description}</p>
              <p className="price">Price: MYR {selectedHotel.price} per night</p>
              <p className="location">Location: {selectedHotel.location}</p>
              <p className="address">Address: {selectedHotel.address}</p>
              <a href={selectedHotel.bookingUrl} target="_blank" rel="noopener noreferrer" className="book-now-button">
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotels;