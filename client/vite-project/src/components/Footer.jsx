import React from "react";
import "./Footer.css";
import { Github, Linkedin, Mail } from "lucide-react"; // optional icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__branding">
            <h3 className="footer__name">Sanjay Chaurasia</h3>
            <p className="footer__quote">Building intelligent solutions, one line of code at a time.</p>
          </div>

          <div className="footer__links">
            <a
              href="https://github.com/Sanjaychaurasia04"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} /> <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sanjaychaurasia04"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sanjaychaurasi22@gmail.com"
              className="footer__link"
            >
              <Mail size={18} /> <span>Email</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Sanjay Chaurasia. All rights reserved.</p>
          <p>Crafted with ❤️ using React.js & lots of ☕</p>
        </div>
      </div>
    </footer>
  );
}
