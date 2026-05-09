import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data for demonstration if backend isn't running yet
        setProjects([
          {
            _id: '1',
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce solution with payment gateway integration and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveLink: '#',
            githubLink: '#'
          },
          {
            _id: '2',
            title: 'Task Management App',
            description: 'A beautiful and intuitive task manager with real-time collaboration features.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            techStack: ['Vue.js', 'Firebase', 'Tailwind'],
            liveLink: '#',
            githubLink: '#'
          },
          {
            _id: '3',
            title: 'AI Image Generator',
            description: 'An application that leverages OpenAI APIs to generate and edit images based on text prompts.',
            image: 'https://images.unsplash.com/photo-1678280628373-042bf9296bd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            techStack: ['React', 'Express', 'OpenAI API'],
            liveLink: '#',
            githubLink: '#'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {loading ? (
          <div className="loading-spinner">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project._id || index} 
                className="fade-in-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
