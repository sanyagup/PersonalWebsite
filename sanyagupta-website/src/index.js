import ReactDOM from 'react-dom/client';
import 'w3-css/w3.css';
import './index.css';
import About from './about.js';
import WorkExperience from './workExperience.js';

const App = () => {
  const handleClick = () => {
       window.scrollTo({
         top: document.documentElement.scrollHeight,
         behavior: 'smooth',
       });
     };
  

  return (
    <>
    
      <div className="home">
        <header className="navbar">
          <h1 className="logo">𐙚 Sanya Gupta 𐙚</h1>
          <nav className="nav-links">
            <a href="#about"><strong>About me</strong></a>
            <a href="#work_experience"><strong>Work Experience</strong></a>
            <a href="#projects"><strong>Projects</strong></a>
            <button className="contact-button">Get in touch!</button>
          </nav>
        </header>

        <section className="hero">
          <div className='center'>
            <div className='left-panel w3-animate-top'>
              <img src={require('./pictures/100_0225.jpg')} alt="Sanya Gupta" className="hero-img"></img>
              <p>Hi I am Sanya Gupta! I am an incoming undergraduate freshman at the University of Maryland, College Park! I am majoring in Computer and Information sciences with a concentration in data science and cybersecurity. To learn more about me check out my about me, resume, and work!</p>
            </div>

            <div className="right-panel w3-animate-top">
              <h1 className="portfolio-title">Hello! Welcome to Sanya's Portfolio🧸...</h1>
              <div className='social-links'>
                <p><strong>LinkedIn & Email: </strong>sanyagup07</p>
                <p><strong>Github: </strong>sanyagup</p>
              </div>
              <button className="scroll-indicator w3-animate-top" onClick={handleClick}>Scroll down</button>
            </div>
          </div>
          
        </section>
        
        
        <h2 className="middle">✩°｡🧸𓏲⋆.🧺𖦹 ₊˚....</h2>
        
        <section id="about" className="secondPage">
          <About />
        </section>

        <section id="work_experience" className="thirdPage">
          <WorkExperience />
        </section>
        
        </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);