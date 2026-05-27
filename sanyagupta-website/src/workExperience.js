import React from "react";
import './workExperience.css';

const experiences = [
  {
    role: 'Software Engineer Intern · AI',
    org: 'inMorphis',
    date: 'May 2026 - Present',
    bullets: [
      'Building AI-focused software as a summer engineering intern on the AI team.',
    ],
  },
  {
    role: 'Inclusive Communities Organizer',
    org: 'Technica',
    date: 'March 2026 - Present',
    bullets: [
      'Organize a technology-focused summer program for 20+ incoming college students of underrepresented genders in STEM, delivering hands-on web development and backend training using Typescript, React, and Git, which equipped participants with practical professional skills.',
      'Spearhead the project track of the summer program by creating 5+ full-stack projects using Typescript, React, and Git, enabling organizing teams to provide students with real-world development experience.'
    ],
  },
  {
    role: 'Backend Engineer · MITRE Project',
    org: 'App Development Club',
    date: 'Feb 2026 — May 2026',
    link: 'https://git.appdevclub.com/MITRESPRING2026/mitre-spring-26',
    bullets: [
      'Updated the search bar function to connect to all policies route and vectorize route to find similar policies as requested by the user, reducing the time to retrieve these policies by 50%.',
      'Implemented a filter route for filtering over 50+ MITRE policies and added 5-6 categories and connected it to the frontend, allowing MITRE employees to find policies more efficiently.',
      'Presented website to 10+ MITRE employees, securing critical user feedback to future improve policy retrieval.',
    ],
  },
  {
    role: 'Software Engineer · General Assistant',
    org: 'Robert H. Smith School of Business',
    date: 'Sep 2025 — May 2026',
    link: 'https://github.com/business-school-app-dev',
    bullets: [
      'Collaborated with Business Associate Dean Joseph Bailey to define and prioritize feature requirements for UMDollar, increasing student financial engagement by 50% at the University of Maryland, College Park.',
      'Advocated for platform expansion by presenting product demos and strategic roadmaps to 5+ executive stakeholders including the UMD President, SECU sponsors, and the Deans of the Smith School and UMD Libraries to align technical development with university-wide wellness goals.',
      'Managed the complete product launch process for the Apple App Store using TestFlight, ensuring the app met ASO standards and Apple\'s Human Interface Guidelines for a problem-free release.',
      'Migrated the database from PostgreSQL to SQLite, enabling a lightweight, resource-efficient local data environment.',
      'Designed a route with dynamic course-matching logic via the UMD Courses API, cutting the time to find relevant courses by 50%.',
    ],
  },
  {
    role: 'Technical Operation Team',
    org: 'App Development Club',
    date: 'Jul 2025 — Aug 2025',
    bullets: [
      'Built secure Flask API endpoints for hierarchical team management, reducing manual setup time by 60% via automated parent-child group creation with Pydantic validation.',
      'Designed RESTful APIs in Flask + React, improving data exchange speed by 25% through optimized HTTP handling and reusable authentication headers.',
      'Integrated front-end and back-end with token-based authentication, achieving 100% request success in load tests.',
      'Developed a Slack Web API integration to programmatically verify user membership across workspaces, groups, and channels automating access audits with retry/backoff and privacy-safe logging.',
    ],
  },
  {
    role: 'IT Summer Intern',
    org: 'Next Phase Solutions and Services',
    date: 'Jun 2023 — Aug 2025',
    bullets: [
      'Contributed to a company project that lets users plug in API connectors and visually surface IT/OS issues, Jira tickets, AWS cloud problems, SNMP data, and more.',
      'Developed and fine-tuned GPT-2 models with 93% accuracy.',
      'Delivered a fine-tuned chatbot model to 5–6 software engineers.',
      'Managed structured data in SQL and Excel alongside engineering teams.',
    ],
  },
  {
    role: 'Technica Fellowship 2025',
    org: 'Technica',
    date: 'Jun 2025 — Aug 2025',
    bullets: [
      'Built projects using web development concepts and React.js.',
      'Practiced bash and collaborative GitHub workflows.',
      'Participated in workshops on career and college readiness, including interview prep and professional networking.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="work-section">
      <span className="section-eyebrow">Experience</span>
      <h2 className="section-title">Work & leadership</h2>

      <ol className="timeline">
        {experiences.map((exp, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <article className="timeline-card">
              <header className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-date">{exp.date}</span>
              </header>
              <p className="timeline-org">{exp.org}</p>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {exp.link && (
                <a
                  className="timeline-link"
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository ↗
                </a>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
