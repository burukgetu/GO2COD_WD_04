import React, { useState } from "react";
import Lightbox from "./Lightbox";

// Example image URLs
const images = [
  "/i1.jpg",
  "/i2.jpg",
  "/i3.jpg",
  "/i4.jpg",
  "/i5.jpg",
  "/i6.jpg",
  "/i7.png",
  "/i8.jpg",
  "/i9.jpg",
  "/i10.jpg",
];

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              onClick={() => openLightbox(image)}
            />
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <Lightbox image={currentImage} closeLightbox={closeLightbox} />
      )}
    </div>
  );
};

export default Gallery;