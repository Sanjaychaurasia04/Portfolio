import React from 'react';
import './Project.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Based Shelf Life & Expiry Date Detection System",
      description: "Flipkart Grid 6 Hackathon project combining Computer Vision and OCR to predict freshness of fruits/vegetables and extract expiry dates from packaging. Advanced to penultimate round with dual-vision system for perishable item handling.",
      technologies: ["Python", "TensorFlow", "OpenCV", "EasyOCR", "Keras", "CNN"],
      githubUrl: "https://github.com/Sanjaychaurasia04/Flipkart-Grid-6.0",
      liveUrl: "#",
      image: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "Shopify Clone E-Commerce Platform",
      description: "A responsive Shopify Clone built with React and Vite, simulating modern e-commerce experience with product listings, cart functionality, and smooth navigation. Features dynamic cart updates and fully responsive design.",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "E-commerce"],
      githubUrl: "https://github.com/Sanjaychaurasia04/shopify-clone",
      liveUrl: "https://shopify-clone-orcin.vercel.app/",
      image: "🛒",
      featured: true
    },
    {
      id: 3,
      title: "Electrical Services Website",
      description: "Professional website for electrical services with booking system, service catalog, and contact forms. Includes interactive calendar for appointments and localStorage-based form submissions with full responsiveness.",
      technologies: ["React", "React Router", "CSS3", "React Calendar", "LocalStorage"],
      githubUrl: "https://github.com/Sanjaychaurasia04/electrical-services-website",
      liveUrl: "https://electrical-services-seven.vercel.app/",
      image: "⚡",
      featured: true
    },
    {
      id: 4,
      title: "Printing Machine Repair Services Website",
      description: "Professional platform for printing machine repair services featuring service catalog, image gallery, client testimonials, and booking system. Specializes in Heidelberg and major printing press repairs.",
      technologies: ["React", "CSS3", "React Icons", "Vite", "Responsive Design"],
      githubUrl: "https://github.com/Sanjaychaurasia04/printing-repair-website",
      liveUrl: "https://printing-repair-website.vercel.app/",
      image: "🖨️",
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <header className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>
          <div className="projects__divider"></div>
          <p className="projects__subtitle">
            Here are some of my recent projects that showcase my skills in full-stack development, AI, and modern web technologies
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
              <div className="project-card__image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a 
                    href={project.githubUrl} 
                    className="project-link project-link--github"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl} 
                      className="project-link project-link--live"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}