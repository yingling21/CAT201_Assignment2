'use client'

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      title: "First time in Penang and you don’t know where to start?",
      excerpt: "Enjoy a decade of first-hand Penang experience from someone who knows the place inside out.",
      image: "./images/blog1.jpg",
      date: "03/01/2025",
      readMoreUrl: "https://www.penang-insider.com/"
    },
    {
      title: "30 BEST Cafes You Must Visit In Penang (2025 Edition)",
      excerpt: "A true Foodie doesn’t gatekeep so today, we’re introducing our list of the BEST Penang cafes you need to visit in in 2025!",
      image: "./images/blog2.jpg",
      date: "02/01/2025",
      readMoreUrl: "https://penangfoodie.com/30-best-cafes-you-must-visit-in-penang-2025-edition/"
    },
    {
      title: "8 Best 2025 New Year Countdown Spots In Penang",
      excerpt: "Say goodbye to 2024 and hello to 2025! There’s no better way to bid farewell to another productive year than by counting down with your friends, family and loved ones.",
      image: "./images/blog3.jpg",
      date: "30/12/2024",
      readMoreUrl: "https://penangfoodie.com/new-year-2025-countdown-spots-in-penang/"
    },
    {
      title: "Pai Thee Kong",
      excerpt: "This event is held to celebrate Pai Tee Kong festival with our community with full of joy and unity. Various interesting activities will be held including lion dance performances, cultural shows, special feasts.",
      image: "./images/blog4.jpeg",
      date: "In 05/02/2025",
      readMoreUrl: "https://mypenang.gov.my/events/all-events/687/?lg=en"
    },
    {
      title: "Why we moved to Penang, Malaysia",
      excerpt: "Not every decision made on a bar stool is a good one, but this one certainly was. We’d driven to the French Alps in our campervan for a week’s skiing in January 2023.",
      image: "./images/blog6.jpg",
      date: "21/09/2024",
      readMoreUrl: "https://mypenang.gov.my/events/all-events/687/?lg=en"
    },
    {
      title: "The Ultimate Guide To Penang, Malaysia",
      excerpt: "Penang is one of those places I’ve dreamed of exploring for years. You know those places that completely capture your imagination, but you just can’t make it happen?",
      image: "./images/blog5.jpg",
      date: "24/03/2019",
      readMoreUrl: "https://awinterescape.com/penang-malaysia/"
    }
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 3 : Math.max(0, blogPosts.length - 3)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 < blogPosts.length ? prevIndex + 3 : 0
    );
  };

  return (
    <div id="blog" className="blog">
      <h1>Penang Travel Blog</h1>

      <div className="blog-carousel-container">
        <button 
          className="carousel-button previous" 
          onClick={handlePrevious}
          aria-label="Previous blog posts"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div {...handlers} className="blog-carousel">
          {blogPosts.slice(currentIndex, currentIndex + 3).map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <div className="blog-header">
                  <h2>{post.title}</h2>
                  <p className="date">{post.date}</p>
                </div>
                <p className="excerpt">{post.excerpt}</p>
                <a 
                  href={post.readMoreUrl} 
                  className="read-more-button"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button next" 
          onClick={handleNext}
          aria-label="Next blog posts"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(blogPosts.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
            aria-label={`Go to blog post set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

