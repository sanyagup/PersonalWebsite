import React, { useState } from 'react';

const Accordions = () => {
  const [openSections, setOpenSections] = useState({ 0: true });

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: 'How I got inspired',
      content:
        'I grew up playing video games Wii, Wii U, Nintendo Switch, then Roblox and Minecraft. That curiosity about how the games I loved were actually built pulled me toward computer science. My first coding class, "Principles of Java," made it real. I loved the challenge of getting code to work, and I went on to take more coding classes in high school that opened up software development and data analysis as paths. Over time, though, I realized I wanted more than just building. I wanted to shape what gets built and why. That\'s what drew me to product management, and ultimately to Information Systems and Management at the University of Maryland. The major is the bridge I was looking for: a path into big tech where I can stay close to the technical work while also socializing, leading, and pitching products to investors and stakeholders.',
    },
    {
      title: 'My background',
      content:
        'I work across Python, Java, JavaScript, React, HTML, and CSS. I hold CompTIA Network+, Cisco CCST Networking, and Scrum Fundamentals certifications. I have configured Cisco switches end-to-end — from basic setup through IP addressing and VLANs. On the building side: a multi-game Game Hub, this portfolio, a Rock-Paper-Scissors GUI in Python, and several ML projects. More on my GitHub.',
    },
    {
      title: 'Education',
      content:
        'Sophomore at the University of Maryland, College Park, graduating in 2028 with a Bachelor of Science in Information Systems and Management from the Robert H. Smith School of Business.',
    },
  ];

  return (
    <div className="accordion">
      {sections.map((section, index) => {
        const isOpen = !!openSections[index];
        return (
          <div
            key={index}
            className={`accordion-item ${isOpen ? 'is-open' : ''}`}
          >
            <button
              onClick={() => toggleSection(index)}
              className="accordion-trigger"
              aria-expanded={isOpen}
            >
              <span className="accordion-title">{section.title}</span>
              <span className="accordion-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div className="accordion-panel">
              <div className="accordion-panel-inner">
                <p>{section.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordions;
