import './about.css';
import myPhoto2 from './pictures/appdev.jpeg';
import Accordions from './components/accordions';

const aboutPage = () => {
  return (
    <section className="about">
      <span className="section-eyebrow">About</span>
      <h2 className="section-title">A little about me</h2>

      <div className="about-grid">
        <div className="about-image-wrap">
          <div className="about-image-frame">
            <img src={myPhoto2} alt="Sanya Gupta" className="about-image" />
          </div>
        </div>
        <div className="about-content">
          <Accordions />
        </div>
      </div>
    </section>
  );
};

export default aboutPage;
