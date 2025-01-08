'use client'

import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './FoodAndBeverages.css';

const FoodAndBeverages = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDish, setSelectedDish] = useState(null);

  const categories = {
    all: { title: "All Dishes" },
    local: { title: "Local Suggestions" },
    street: { title: "Street Food" },
    penang: { title: "Best Dining" }
  };

  const dishes = [
    {
      name: "Penang Char Kway Teow",
      description: "Stir-fried rice cake strips with shrimp and chives.",
      longDescription: "A beloved Penang street food dish featuring flat rice noodles stir-fried with prawns, cockles, Chinese lap cheong (sausage), eggs, bean sprouts, and chives in a mix of soy sauces.",
      image: "./images/char-kway-teow.jpg",
      category: ["all", "local"]
    },
    {
      name: "Nasi Kandar",
      description: "Rice served with a variety of curries and side dishes.",
      longDescription: "A Malaysian food restaurant meal with steamed rice served with a variety of curries and side dishes. Originally a dish sold by Indian Muslim street vendors, it has become a staple of Penang cuisine.",
      image: "./images/nasi-kandar.jpg",
      category: ["all", "local"]
    },
    {
      name: "Penang Laksa",
      description: "Spicy-sour fish soup with rice noodles.",
      longDescription: "A tangy and spicy noodle soup made with mackerel, tamarind, and various herbs and spices. Topped with mint leaves, pineapple, cucumber, and torch ginger flower, it's a unique combination of flavors.",
      image: "./images/penang-laksa.jpg",
      category: ["all", "local"]
    },
    {
      name: "Kway Chap",
      description: " Originating from Teochew cuisine, Kway Chap features flat, wide rice noodles served in a flavorful, herbal-infused broth.",
      longDescription: "Kway chap is a braised duck noodle with duck meat, skin, intestine, coagulated blood and braised duck egg in a herbal broth unique to Penangites. This is the most common comfort food you can find in Penang but not widely available in all restaurants. Your best find would be at Lebuh Kimberley.",
      image: "./images/kway-chap.jpg",
      category: ["all", "street"]
    },
    {
      name: "Oh-Chien (Oyster Omelette)",
      description: "Comes with juicy, fresh oysters atop a bed of crispy yet sticky egg batter fried to perfection",
      longDescription: "Fried Oyster Omelette, also known as ‘Oh Chien’ by local is one of the must-try street food in Penang. Comes with juicy, fresh oysters atop a bed of crispy yet sticky egg batter fried to perfection, this delicacy is guaranteed to please your taste buds, especially paired with the sour yet spicy chilli sauce.",
      image: "./images/oh-chien.jpg",
      category: ["all", "local", "street"]
    },
    {
      name: "Curry Mee",
      description: "Spicy coconut milk-based noodle soup with toppings like cockles and tofu.",
      longDescription: "A beloved Penang street food dish featuring flat rice noodles stir-fried with prawns, cockles, Chinese lap cheong (sausage), eggs, bean sprouts, and chives in a mix of soy sauces.",
      image: "./images/curry-mee.jpg",
      category: ["all", "local"]
    },
    {
      name: "Hokkien Mee (Prawn Noodle)",
      description: "Prawn noodle soup with pork slices and boiled eggs.",
      longDescription: "Penang Hokkien Mee is always garnished with fried shallots and special spicy prawns. It’s available in most coffee shops and street food stalls in Penang.",
      image: "./images/hokkien-mee.jpg",
      category: ["all", "local"]
    },
    {
      name: "Penang Popiah",
      description: "Fresh spring rolls with jicama, eggs, and sweet sauce.",
      longDescription: "Penang Hokkien Mee is always garnished with fried shallots and special spicy prawns. It’s available in most coffee shops and street food stalls in Penang.",
      image: "./images/popiah.jpg",
      category: ["all", "street"]
    },
    {
      name: "Teochew Cendol",
      description: "A refreshing dessert made with shaved ice, green jelly noodles, palm sugar syrup, and coconut milk. It’s a perfect treat on a hot day.",
      longDescription: "Don’t worry about not finding the small lane where this famous Penang Teochew Cendol stall is located. Spot the long queue off Jalan Penang and you are at the right place. Cool yourself down after a walk round George Town with a bowl of Penang cendol, a local dessert with a coconut milk and gula Melaka (palm sugar) base, topped with red beans, pandan flavoured noodles and shaved ice.",
      image: "./images/teochew-chendol.jpg",
      category: ["all", "street"]
    },
    {
      name: "Penang Rojak",
      description: "Fruit and vegetable salad with a thick shrimp paste sauce.",
      longDescription: "Penang Rojak can count as a healthy dessert option in Penang. Loaded with more than your 5-a-day fibre needs, Penang Rojak is made from a variety of fruits and vegetables topped with Penang’s own creation of prawn paste sauce. You can also choose to have it spicy or non-spicy.",
      image: "./images/penang-rojak.jpg",
      category: ["all", "street"]
    },
    {
      name: "Pasembur",
      description: "Indian-Muslim salad of shredded vegetables, seafood, and peanut sauce.",
      longDescription: "A smorgasbord of deep-fried fritters, tofu, hard-boiled egg and julienned vegetables smothered in spicy-sweet peanut sauce. Where to try: The little shack on Lebuh Union, George Town. You can also try this at Gurney Drive Hawker Centre.",
      image: "./images/pasembur.jpg",
      category: ["all", "street"]
    },
    {
      name: "Luckeelicious",
      description: "#5 of 18 Restaurants in Air Itam, Non-halal",
      longDescription: "A Non-Halal restaurant serve Hong Kong and local Nan-Yang cuisine. We serve famous Hong Kong food like Macau Bun, Polo Bun, Egg Tarts, French Toast，Crispy Piggy Bun, Crispy Pork Lard Rice, Honey Roasted Pork Belly Rice, Nissin Noodles and etc.",
      image: "./images/restaurant1.jpg",
      category: ["all", "penang"]
    },
    {
      name: "Reggae Cafe Penang",
      description: "#6 of 976 Restaurants in George Town, Italian, Vegetarian Friendly",
      longDescription: "Reggae Cafe is a pork-free cafe & restaurant with non-alcoholic beverages. Offers 80+ cake selections. We serve breakfast, lunch, dinner, coffee, drinks and cakes. We have a variety of cakes, including vegan and gluten-free options.",
      image: "./images/restaurant2.jpg",
      category: ["all", "penang"]
    },
    {
      name: "Makan Kitchen",
      description: "#1 of 74 Restaurants in Batu Ferringhi, Asian, Vegetarian Friendly",
      longDescription: "Makan Kitchen - All- day dining restaurant overlooking the pool with live, interactive stations showcasing the diversity of Malaysian delicacies – Malay, Chinese, Indian and other local specialties. Private dining options available for families and groups.",
      image: "./images/restaurant3.jpg",
      category: ["all", "penang"]
    },
    {
      name: "My Own Cafe",
      description: "#7 of 976 Restaurants in George Town, MICHELIN, Asian, Vegetarian Friendly",
      longDescription: "Our signature dish are Penang Asam Laksa and Nyonya/lemak laksa. Nyonya laksa usually available on Friday. Vegetarian spring rolls compliment well when you dipped in the laksa soup",
      image: "./images/restaurant4.jpg",
      category: ["all", "penang"]
    },
    {
      name: "Feringgi Grill",
      description: "#6 of 74 Restaurants in Batu Ferringhi, MICHELIN, European, Vegetarian Friendly",
      longDescription: "Set in the Shangri-La Rasa Sayang Resort, Feringgi Grill offers Western fine dining with stunning views of Batu Ferringhi Beach. Signature dishes include grilled steaks and seafood prepared with premium ingredients.",
      image: "./images/restaurant5.jpg",
      category: ["all", "penang"]
    },
    {
      name: "Restaurant Blanc Penang",
      description: "#31 of 976 Restaurants in George Town, MICHELIN, French, European, Vegetarian Friendly",
      longDescription: "Blanc, a 42 seat restaurant nestled in the historic yet sophisticated Macalister Mansion, a restored colonial boutique hotel in the heart of Georgetown, Penang. At BLANC, we offer you an exquisite dining experience where contemporary French culinary artistry meets the finest seasonal and locally sourced ingredients, paired with selectively curated wines, impeccable service and intimate ambience.",
      image: "./images/restaurant6.jpg",
      category: ["all", "penang"]
    }
  ];

  const filteredDishes = dishes.filter(dish => dish.category.includes(activeCategory));

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 3 : Math.max(0, filteredDishes.length - 3)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 < filteredDishes.length ? prevIndex + 3 : 0
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDish]);

  return (
    <div id="food-and-beverages" className="food-and-beverages">
      <h1>Penang's Culinary Delights</h1>

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

      <div className="dishes-carousel-container">
        <button 
          className="carousel-button previous" 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div {...handlers} className="dishes-carousel">
          {filteredDishes.slice(currentIndex, currentIndex + 3).map((dish, index) => (
            <div 
              key={index} 
              className="dish-card"
              onClick={() => setSelectedDish(dish)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedDish(dish);
                }
              }}
            >
              <div className="dish-image">
                <img src={dish.image} alt={dish.name} />
              </div>
              <div className="dish-content">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <span className="view-more">Click to view more</span>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button next" 
          onClick={handleNext}
          disabled={currentIndex + 3 >= filteredDishes.length}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(filteredDishes.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {selectedDish && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedDish(null)}
        >
          <div 
            className="modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedDish(null)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="modal-image">
              <img src={selectedDish.image} alt={selectedDish.name} />
            </div>
            <div className="modal-details">
              <h2>{selectedDish.name}</h2>
              <p>{selectedDish.longDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodAndBeverages;