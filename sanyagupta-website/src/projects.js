import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Mental Health Dashboard',
      tag: 'Technica · React',
      description:
        'A mental health dashboard for hackers — accessible support via stretch breaks, journaling prompts, guided breathing, and mood tracking.',
      link: 'https://github.com/sanyagup/mental-health-dashboard-technica',
      image: require('./pictures/Screenshot 2025-08-10 at 7.01.07 PM.png'),
    },
    {
      title: 'Game Hub',
      tag: 'React.js',
      description:
        'A web app that hosts multiple games — tic-tac-toe, rock-paper-scissors, and more.',
      link: 'https://github.com/sanyagup/GameHub',
      image: require('./pictures/Screenshot 2025-07-01 134755.png'),
    },
    {
      title: 'Personal Portfolio',
      tag: 'React.js',
      description: 'The personal website you are currently viewing. Built with React.js.',
      link: 'https://github.com/sanyagup/PersonalWebsite',
      image: require('./pictures/personalwebsite.png'),
    },
    {
      title: 'Rock Paper Scissors GUI',
      tag: 'Python',
      description: 'A simple Rock-Paper-Scissors game with a graphical interface built in Python.',
      link: 'https://github.com/sanyagup/RockPaperScissors',
      image: require('./pictures/Screenshot 2025-07-01 140119.png'),
    },
    {
      title: 'GPT-2 Chatbot',
      tag: 'Machine Learning',
      description:
        'A fine-tuned GPT-2 chatbot exploring different ML algorithms and techniques.',
      link: 'https://github.com/sanyagup/GPT2-Chatbot',
    },
    {
      title: 'Image Classification',
      tag: 'Machine Learning',
      description:
        'Image classification project showcasing different ML algorithms and techniques.',
      link: 'https://github.com/sanyagup/ImageClassification/blob/main/main.py',
    },
    {
      title: 'Python SQLite Project',
      tag: 'Python · SQLite',
      description:
        'A project demonstrating the use of SQLite with Python for database management.',
      link: 'https://github.com/sanyagup/Python-SQLite-files',
    },
  ];

  return (
    <div className="projects-container">
      <span className="section-eyebrow">Work</span>
      <h2 className="section-title">Selected projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrap">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <div className="project-image-placeholder" aria-hidden="true">
                  <span>{project.title.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="project-body">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <span className="project-link">View project ↗</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
