import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Sanjay Chaurasia</span>
          </h1>
          <h2 className="hero__subtitle">
            Full Stack Developer & AI Enthusiast
          </h2>
          <p className="hero__description">
            I build innovative web applications and AI solutions using modern technologies. 
            Passionate about creating efficient, scalable, and user-friendly software.
          </p>
          <div className="hero__buttons">
            <button onClick={scrollToProjects} className="hero__btn hero__btn--primary">
              View My Work
            </button>
            <button onClick={scrollToContact} className="hero__btn hero__btn--secondary">
              Get In Touch
            </button>
          </div>
          <div className="hero__links">
            <a href="https://github.com/Sanjaychaurasia04" className="hero__link">GitHub</a>
            <a href="https://linkedin.com/in/sanjaychaurasia04" className="hero__link">LinkedIn</a>
            <a href="mailto:sanjaychaurasia0403@gmail.com" className="hero__link">Email</a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__avatar">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}