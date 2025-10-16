import React from 'react';
import './Project.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Chat Application",
      description: "A real-time chat application with AI integration for smart responses and automated assistance. Features include user authentication, real-time messaging, and AI-powered chat suggestions.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "TensorFlow"],
      githubUrl: "https://github.com/Sanjaychaurasia04/ai-chat-app",
      liveUrl: "#",
      image: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration. Includes admin dashboard for inventory management.",
      technologies: ["React", "Express.js", "MongoDB", "JWT", "Stripe API"],
      githubUrl: "https://github.com/Sanjaychaurasia04/ecommerce-platform",
      liveUrl: "#",
      image: "🛒",
      featured: true
    },
    {
      id: 3,
      title: "Machine Learning Model Dashboard",
      description: "Interactive dashboard for visualizing and managing machine learning models. Includes model performance metrics, data visualization, and prediction interfaces.",
      technologies: ["Python", "Django", "React", "Chart.js", "Scikit-learn"],
      githubUrl: "https://github.com/Sanjaychaurasia04/ml-dashboard",
      liveUrl: "#",
      image: "📊",
      featured: false
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Supports file attachments and comments.",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
      githubUrl: "https://github.com/Sanjaychaurasia04/task-manager",
      liveUrl: "#",
      image: "✅",
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
            Here are some of my recent projects that showcase my skills and experience
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
                  {project.liveUrl && (
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