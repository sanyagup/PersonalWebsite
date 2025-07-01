import React, { useState } from 'react';
import img2 from './pictures_for_components/IMG_0306.jpg';
import img1 from './pictures_for_components/100_0225.jpg';
import img3 from './pictures_for_components/IMG_6344.jpg';
import img4 from './pictures_for_components/100_0205.jpg';
import img5 from './pictures_for_components/IMG_0309.jpg';
import img6 from './pictures_for_components/IMG_6722.jpg';
import 'w3-css/w3.css';

const images = [img1, img2, img3, img4, img5, img6];

const AutoSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    setSlideIndex((prev) => (prev + n + images.length) % images.length);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="w3-content w3-display-container" style={{ maxWidth: '800px', position: 'relative' }}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className="mySlides"
          style={{
            width: '100%',
            display: slideIndex === idx ? 'block' : 'none',
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{ width: '100%' }}>
        <span className="w3-left w3-hover-text-khaki" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => plusSlides(-1)}>
          &#10094;
        </span>
        <span className="w3-right w3-hover-text-khaki" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => plusSlides(1)}>
          &#10095;
        </span>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w3-badge demo w3-border w3-transparent w3-hover-white${slideIndex === idx ? ' w3-white' : ''}`}
            style={{ cursor: 'pointer', margin: '0 2px' }}
            onClick={() => currentSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoSlideshow;