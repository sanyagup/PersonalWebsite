import ReactDOM from 'react-dom/client';
import 'w3-css/w3.css';
import './index.css';
import About from './about.js';
import WorkExperience from './workExperience.js';
import Projects from './projects.js';
import Slideshow from './components/Slideshow.js';

const App = () => {
  const handleClick = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="home">
        <header className="navbar">
          <h1 className="logo">𐙚 Sanya Gupta 𐙚</h1>
          <nav className="nav-links">
            <a href="#about"><strong>About</strong></a>
            <a href="#work_experience"><strong>Experience</strong></a>
            <a href="#projects"><strong>Projects</strong></a>
            <button className="contact-button" onClick={() => window.location = 'mailto:sanyagup07@gmail.com'}>Get in touch</button>
          </nav>
        </header>

        <section className="hero">
          <div className="center">
            <div className="left-panel">
              <Slideshow />
            </div>

            <div className="right-panel">
              <span className="eyebrow">Portfolio · 2026</span>
              <h1 className="portfolio-title">Hi, I'm Sanya.</h1>
              <p className="tagline">
                Information Systems student at the University of Maryland, College Park. I build software, study management and systems, and like making things that are both useful and well-crafted.
              </p>
              <div className="social-links">
                <button className="contact-button2" onClick={() => window.location = 'https://www.linkedin.com/in/sanyagup07/'} aria-label="LinkedIn"><img src={require('./pictures/linkedin-icon.jpg')} alt="LinkedIn" /></button>
                <button className="contact-button2" onClick={() => window.location = 'https://github.com/sanyagup'} aria-label="GitHub"><img src={require('./pictures/github-icon.png')} alt="GitHub" /></button>
                <button className="contact-button2" onClick={() => window.location = 'mailto:sanyagup07@gmail.com'} aria-label="Email"><img src={require('./pictures/gmail-icon.png')} alt="Email" /></button>
              </div>
              <button className="scroll-indicator" onClick={handleClick}>Explore</button>
            </div>
          </div>
        </section>

        <h2 className="middle">✦ ✦ ✦</h2>

        <section id="about" className="secondPage">
          <About />
        </section>

        <section id="work_experience" className="thirdPage">
          <WorkExperience />
        </section>

        <section id="projects" className="fourthPage">
          <Projects />
        </section>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
