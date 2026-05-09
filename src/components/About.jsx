import React from 'react';
import './About.css';
import { Code, Server, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={32} className="text-primary" />,
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and beautiful user interfaces using modern tools like React, Vue, and TailwindCSS.'
    },
    {
      icon: <Server size={32} className="text-secondary" />,
      title: 'Backend Architecture',
      description: 'Designing scalable APIs and microservices with Node.js, Express, and Python to power complex web applications.'
    },
    {
      icon: <Database size={32} className="text-primary" />,
      title: 'Database Management',
      description: 'Structuring and optimizing both SQL and NoSQL databases like MongoDB and PostgreSQL for performance and reliability.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass-panel fade-in-up">
            <p>
              I am a passionate software engineer with a strong foundation in both frontend and backend development. 
              My journey began with a curiosity about how the web works, which quickly evolved into a career 
              building impactful digital products.
            </p>
            <p>
              I thrive in environments where I can tackle challenging problems, learn new technologies, 
              and collaborate with creative minds. Whether it's crafting a pixel-perfect UI or designing 
              a robust backend architecture, I bring dedication and attention to detail to every project.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card glass-card fade-in-up" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
