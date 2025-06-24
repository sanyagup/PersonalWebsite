import ReactDOM from 'react-dom/client';
import 'w3-css/w3.css';
// import myPhoto from './IMG_0306.jpg'
import portofolioTitle from './Screenshot_2025-06-10_105058-removebg-preview.png'
import './index.css';
import About from './about.js';
import AutoSlideshow from './components/AutoSlideshow.js';

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
            <a href="#resume"><strong>Resume</strong></a>
            <a href="#work"><strong>Work</strong></a>
            <button className="contact-button">Get in touch!</button>
          </nav>
        </header>

        <section className="hero">
          <div className='center'>
            <div className='left-panel w3-animate-top'>
              <AutoSlideshow />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis orci eget dignissim. Ut sed orci elit. Integer aliquet est quis condimentum ullamcorper. Morbi malesuada posuere odio, et viverra purus euismod at. Aenean aliquet, ligula eu condimentum convallis, massa augue sollicitudin est, ac venenatis orci augue ut libero. </p>
            </div>

            <div className="right-panel w3-animate-top">
              <img src={portofolioTitle} alt="portfolioTitle" className="portfolio-title"></img>
              <div className='social-links'>
                <p><strong>LinkedIn & Email: </strong>sanyagup07</p>
                <p><strong>Github: </strong>sanyagup</p>
              </div>
              <button className="scroll-indicator w3-animate-top" onClick={handleClick}>Scroll down</button>
            </div>
          </div>
          
        </section>
        
        <h2 className="middle">‧₊˚ ☁️⋅♡𓂃 ࣪ ִֶָ☾. ₊˚ʚ 🫧 ₊˚✧ ﾟ.</h2>
        
        <section id="about" className="secondPage">
          <About />
        </section>
        </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);