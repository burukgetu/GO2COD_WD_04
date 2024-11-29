import React from "react";

const Lightbox = ({ image, closeLightbox }) => {
  return (
    <div className="lightbox-overlay" onClick={closeLightbox}>
      <div className="lightbox-content">
        <img src={image} alt="Lightbox" />
        <button className="close-btn" onClick={closeLightbox}>
          X
        </button>
      </div>
    </div>
  );
};

export default Lightbox;