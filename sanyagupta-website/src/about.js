import 'w3-css/w3.css';
import './about.css'
import myPhoto2 from './IMG_6344.jpg'
import Accordions from './components/accordions';


const aboutPage = () => {
    return(
        <>
            <section className="about">
                <div className="center">
                    <div className="left-panel2">
                        <h1>𐙚 About me 𐙚</h1>
                        <Accordions />

                        
                    </div>
                    <div className='right-panel2'>
                        <img src={myPhoto2} alt="Sanya Gupta" className = "hero-img2"></img>
                    </div>
                </div>
            </section>
        </>

    );
};

export default aboutPage;