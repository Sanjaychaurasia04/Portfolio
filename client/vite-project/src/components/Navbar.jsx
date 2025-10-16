import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const handleContactClick = (e) => {
    e.preventDefault();
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        <div className="navbar__brand">
          <span className="navbar__name">Sanjay Chaurasia</span>
        </div>
        
        <div className="navbar__menu">
          <a href="#about" className="navbar__link">About</a>
          <a href="#skills" className="navbar__link">Skills</a>
          <a href="#projects" className="navbar__link">Projects</a>
          <a href="#experience" className="navbar__link">Experience</a>
          <button onClick={handleContactClick} className="navbar__button">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}