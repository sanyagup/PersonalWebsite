import React from 'react';
import 'w3-css/w3.css';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Game Hub',
      description: 'A website that hosts multiple games such as tic tac toe, rock paper scissors, and more! Built with React.js.',
      link: 'https://github.com/sanyagup/GameHub',
      image: require('./pictures/Screenshot 2025-07-01 134755.png') // <-- Add your image here
    },
    {
      title: 'Personal Portfolio',
      description: 'This personal website that you are currently viewing! Built with React.js.',
      link: 'https://github.com/sanyagup/PersonalWebsite',
      image: require('./pictures/Screenshot 2025-07-01 135817.png')
    },
    {
      title: 'Rock, Paper, Scissors GUI',
      description: 'A simple Rock, Paper, Scissors game with a graphical user interface built in Python.',
      link: 'https://github.com/sanyagup/RockPaperScissors',
      image: require('./pictures/Screenshot 2025-07-01 140119.png')
    },
    {   
      title: 'GPT2 Chatbot',
      description: 'A collection of various machine learning projects that I have worked on, showcasing different algorithms and techniques.',
      link: 'https://github.com/sanyagup/GPT2-Chatbot',
    //   image: require('./pictures/gpt2.png')
    },
    {
      title: 'Image Classification',
      description: 'A collection of various machine learning projects that I have worked on, showcasing different algorithms and techniques.',
      link: 'https://github.com/sanyagup/ImageClassification/blob/main/main.py',
    //   image: require('./pictures/imageclassification.png')
    },
    {
      title: 'Python SQLite Project',
      description: 'A project that demonstrates the use of SQLite with Python for database management.',
      link: 'https://github.com/sanyagup/Python-SQLite-files'
    //   image: require('./pictures/sqlite.png')
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">𐙚 Projects 𐙚</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card w3-card-4 w3-margin">
            <div className="w3-container w3-center">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1em'
                  }}
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                >
                    View Project
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;