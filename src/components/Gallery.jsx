import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "./images/penang-hill.jpg", alt: "Penang Hill" },
    { src: "./images/kek-lok-si-temple.jpg", alt: "Kek Lok Si Temple" },
    { src: "./images/street-penang.jpg", alt: "Georgetown Street Art" },
    { src: "./images/sunset-penang.jpg", alt: "Best Beach in Penang" },
    { src: "./images/armenianstreet.jpg", alt: "Armenian Street" },
    { src: "./images/penang-laksa.jpg", alt: "Penang Laksa" },
    { src: "./images/bar.jpg", alt: "Best Night in Georgetown" },
    { src: "./images/blue-mansion.jpg", alt: "Cheong Fatt Tze - The Blue Mansion" },
    { src: "./images/lovelane.jpg", alt: "Hangout Tonight" },
    { src: "./images/kampung-agong.jpg", alt: "Welcome to Kampung Agong" },
    { src: "./images/bukit-genting.jpg", alt: "by kokladunyayi" },
    { src: "./images/penang-hill-love.jpg", alt: "Turn up the heat at Penang Hill" }
  ];

  return (
    <div id="gallery" className="gallery">
      <h1 className="text-4xl font-bold mb-8">Penang in Pictures</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => setSelectedImage(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <p>{selectedImage.alt}</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;

