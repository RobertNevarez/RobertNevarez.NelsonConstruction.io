import React, { useState } from 'react';
import './Carousel.css';


const Carousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = images.length;

  const moveSlide = (step) => {
    let newIndex = slideIndex + step;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setSlideIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <button className="carousel-control prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel
