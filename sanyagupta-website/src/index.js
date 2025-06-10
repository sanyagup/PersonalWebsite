import React from 'react';
import ReactDOM from 'react-dom/client';
import 'w3-css/w3.css';
import {useRef} from 'react';
// import Button from 'react-bootstrap/Button';
import myPhoto from './IMG_0306.jpg'
import portofolioTitle from './Screenshot_2025-06-10_105058-removebg-preview.png'
import './index.css';

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <>
    
      <div className="home">
        <header className="navbar">
          <h1 className="logo">𐙚 Sanya Gupta 𐙚</h1>
          <nav className="nav-links">
            <a href="#about">About me</a>
            <a href="#resume">Resume</a>
            <a href="#work">Work</a>
            <button className="contact-button">Get in touch!</button>
          </nav>
        </header>

        <section className="hero">
          <div className='center'>
            <div className='left-panel w3-animate-top'>
              <img src={myPhoto} alt="Sanya Gupta" className="hero-img"></img>
              <p>I love data science and cybersecurity. Blah blah blah</p>
            </div>

            <div className="right-panel w3-animate-top">
              <img src={portofolioTitle} alt="portfolioTitle" className="portfolio-title"></img>
              <div className='social-links'>
                <p><strong>LI & EM: </strong>sanyagup07</p>
              </div>
            </div>
          </div>
          
        </section>
        <div className="scroll-indicator w3-animate-top" onClick={scrollToAbout}>Scroll down</div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);