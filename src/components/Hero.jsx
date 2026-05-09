import React from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h2 className="hero-greeting text-secondary">Hello, I'm</h2>
          <h1 className="hero-title">
            <span className="text-gradient">Heet Rupapara</span>
          </h1>
          <h3 className="hero-subtitle">Full Stack Developer</h3>
          <p className="hero-description">
            I craft modern, dynamic, and beautiful web experiences.
            Turning complex problems into elegant, intuitive interfaces.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/heet-113" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/in/heet-rupapara-383b57363" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>

        <div className="hero-image-container fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image glass-panel" style={{ padding: '0.5rem' }}>
            <img src="/profileImage.jpeg" alt="Heet Rupapara" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
