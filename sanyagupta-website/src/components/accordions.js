import React, { useState } from 'react';
import 'w3-css/w3.css';

const Accordions = () => {
  // Track open state per section by index
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    { title: 'How did I get inspired', content: 'I grew up playing video games. Starting with Wii, WiiU, and nitendo switch. Eventually I started playing roblox and minecraft. I became inspired to learn more about how these games are developed, rising my interest in computer science. When I took my first coding class in highschool called "Princples of Java", I loved the challenge of creating code, and realized that there are many different types of fields in computer science. After taking more advanced classes in computer science such as AP CSA, Advanced object oriented design, Advanced python, and a specific career acadcemy for cybersecurity networking, I was able to look into how people analyze and use data with code and how people secure networks which also striked my interest in potentially becoming a cybersecurity analyst or data scientist.' },
    { title: 'My Background', content: 'I have experience in multitude of coding languages: Python, Java, HTML, CSS, JavaScript, React.js. I have CompTIA Network+ and CCST Networking certification. I am also Scrum Fundamentals certified. I have configured cisco switches from basic configurations to configuring the IP addresses and VLANs. I have developed coding projects: a Game Hub website with multiple games, this personal website, Rock, Paper, Scissors GUI in Python, Mutiple ML Projects as well! Feel free to look at my GitHub for more info ;)' },
    { title: 'Education', content: 'I am an incoming freshman at the University of Maryland, College Park. I am majoring in Information Science and planning to do a concentration in data science and cybersecurity. I am planning on pursuing a 4+1 program within my major and get my masters in information management!' },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => toggleSection(index)}
            className="w3-button w3-block w3-left-align w3-xlarge w3-padding-24"
          >
            <strong>{section.title}</strong>
          </button>
          <div className={`w3-container ${openSections[index] ? 'w3-show' : 'w3-hide'}`}>
            <p className='accordion_text'><strong>{section.content}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;
