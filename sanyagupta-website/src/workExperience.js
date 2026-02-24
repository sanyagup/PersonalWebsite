import React from "react";
import './workExperience.css';
const WorkExperience = () => {
  return(
        <>
            <h1>𐙚 Work Experience and Leadership Positions 𐙚</h1>
            <div className="workExperience">
                <div className="work-experience-item">
                    <h3>Backend Engineer - MITRE Project</h3>
                    <p>App Development Club - Feb 2025 to Present</p>
                    <ul>
                        <li>Developing a centralized hub or search that uses NIST publications such as CSF 2.0, privacy framework to help users identify, export cybersecurity guidance</li>
                    </ul>
                </div>
                <div className="work-experience-item">
                    <h3>Software Engineer - General Assistant</h3>
                    <p>Robert H. Smith School of Business - Feb 2025 to Present</p>
                    <ul>
                        <li><a href="https://github.com/business-school-app-dev" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                        <li>Collaborate directly with Associate Dean Joseph Bailey to maintain and enhance UMDollar, a financial wellness platform serving UMD students</li>
                        <li>Support product improvements, financial education initiatives, and user engagement strategies</li>
                        <li>Bridge technology, finance, and student impact through data-driven enhancements</li>
                    </ul>
                </div>
                <div className="work-experience-item">
                    <h3>Software Engineer - UMD Business School Project</h3>
                    <p>App Development Club - Sep 2025 to Dec 2025</p>
                    <ul>
                        <li><a href="https://github.com/business-school-app-dev" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                        <li>Building UMDollar to promote financial wellness through simulations</li>
                        <li>Worked with other software engineers to design and implement UI components for a financial wellness mobile app</li>
                        <li>Built and integrated a Flask backend with a TypeScript frontend for a financial wellness web app by implementing the UMD Courses API and dynamic course-matching logic, improving users' ability to discover relevant courses based on their input and academic interests</li>
                        <li>Presenting app during 2026 Maryland Day</li>
                    </ul>
                </div>
                <div className="work-experience-item">
                    <h3>Technical Operation Team</h3>
                    <p>App Development Club - July 2025 to Aug 2025</p>
                    <ul>
                        <li>Built secure Flask API endpoints for hierarchical team management, reducing manual setup time by 60% through automated parent-child group creation with Pydantic validation</li>
                        <li>Designed and integrated RESTful APIs in Flask and React, improving data exchange speed by 25% through optimized HTTP request handling, structured JSON payloads, and reusable authentication headers</li>
                        <li>Integrated front-end and back-end with token-based authentication, achieving 100% request success in load tests through structured API calls and robust error reporting</li>
                        <li>Developed a Slack Web API integration to programmatically verify user existence and membership (workspace, user groups, and channels), automating access audits and onboarding/offboarding checks with retry/backoff handling and privacy-safe logging</li>
                    </ul>
                </div>
                <div className="work-experience-item">
                    <h3>Information Technology Summer Intern</h3>
                    <p>Next Phase Solutions and Services - June 2023 to August 2025</p>
                    <ul>
                        <li>Helped on a company project that allows users to put in their API connectors and visually display IT problems, Windows/OS problems, Jira Tickets, AWS cloud issues, SNMP data, and many more.</li>
                        <li>Developed and fine-tuned Artificial Intelligence (AI) GPT2 models with an accuracy of 93%</li>
                        <li>Delivered 1 fine-tuned model with chatbot functions to 5-6 software engineers</li>
                        <li>Managed structured data in SQL and Excel with engineering teams</li>
                    </ul>
                </div>
                <div className="work-experience-item">
                    <h3>Technica Fellowship 2025</h3>
                    <p>Technica - June 2025 to August 2025</p>
                    <ul>
                        <li>Developing projects using Web development concepts and React.js</li>
                        <li>Learned how to use bash commands in a collaborative GitHub project</li>
                        <li>Participated in workshops on career and college readiness, including topics such as interview preparation and professional networking</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;