import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__text">
            <p>&copy; {currentYear} Sanjay Chaurasia. All rights reserved.</p>
            <p>Built with React and lots of ☕</p>
          </div>
          <div className="footer__links">
            <a 
              href="https://github.com/Sanjaychaurasia04" 
              className="footer__link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/sanjaychaurasia04" 
              className="footer__link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:sanjaychaurasi22@gmail.com" 
              className="footer__link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}