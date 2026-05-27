import React, { useState, useEffect } from 'react';
import img2 from './pictures_for_components/appdev.jpeg';
import img1 from './pictures_for_components/100_0225.jpg';
import img3 from './pictures_for_components/IMG_6344.jpg';

const images = [img1, img2, img3];

const AutoSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const plusSlides = (n) => {
    setSlideIndex((prev) => (prev + n + images.length) % images.length);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow">
      <div className="slideshow-frame">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`slideshow-img ${slideIndex === idx ? 'is-active' : ''}`}
          />
        ))}
        <button className="slideshow-arrow slideshow-arrow--left" onClick={() => plusSlides(-1)} aria-label="Previous slide">&#10094;</button>
        <button className="slideshow-arrow slideshow-arrow--right" onClick={() => plusSlides(1)} aria-label="Next slide">&#10095;</button>
      </div>
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`slideshow-dot ${slideIndex === idx ? 'is-active' : ''}`}
            onClick={() => currentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlideshow;
