import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const resolveProjectImage = (image) => {
  if (!image) {
    return 'https://via.placeholder.com/400x250';
  }

  if (/^https?:\/\//i.test(image) || image.startsWith('//')) {
    return image;
  }

  const normalizedPath = image.startsWith('/') ? image.slice(1) : image;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card glass-card">
      <div className="project-image-wrapper">
        <img src={resolveProjectImage(project.image)} alt={project.title} className="project-image" />
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              <FaGithub size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
