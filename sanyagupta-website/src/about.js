import 'w3-css/w3.css';
import './about.css'
import myPhoto2 from './pictures/IMG_0306.jpg'
import Accordions from './components/accordions';


const aboutPage = () => {
    return(
        <>
            <section className="about">
            <h1>𐙚 About me 𐙚</h1>
                <div className="center2">
                    <div className="left-panel2">
                        <Accordions />
                       
                    </div>
                    <div className='right-panel2'>
                        <img src={myPhoto2} alt="Sanya Gupta" className = "hero-img2" ></img>
                    </div>
                </div>
            </section>
        </>

    );
};

export default aboutPage;