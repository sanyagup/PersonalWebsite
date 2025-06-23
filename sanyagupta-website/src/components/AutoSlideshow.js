import React, { useEffect, useState } from 'react';
import img1 from './IMG_0306.jpg';
import img2 from './IMG_6344.jpg'; // Replace with real paths
import img3 from './IMG_0306.jpg';
import 'w3-css/w3.css';

const images = [img1, img2, img3];

const AutoSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 10000); // change image every 10s
    return () => clearInterval(timer);
  }, []);

  return (
    <img
      src={images[index]}
      alt="Slideshow"
      className="hero-img w3-animate-fading"
      style={{ transition: 'opacity 1s ease-in-out' }}
    />
  );
};

export default AutoSlideshow;
