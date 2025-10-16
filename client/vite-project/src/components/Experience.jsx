import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Implemented RESTful APIs and integrated with various databases",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Optimized application performance and improved user experience"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2022 - 2023",
      description: [
        "Built responsive user interfaces using modern JavaScript frameworks",
        "Worked with design teams to implement pixel-perfect designs",
        "Participated in code reviews and agile development processes",
        "Improved application accessibility and cross-browser compatibility"
      ],
      technologies: ["JavaScript", "React", "CSS3", "Git", "Webpack"]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "StartUp Tech",
      period: "2021 - 2022",
      description: [
        "Assisted in developing features for web applications",
        "Learned and applied software development best practices",
        "Participated in team meetings and project planning sessions",
        "Gained experience with version control and collaborative development"
      ],
      technologies: ["Python", "Django", "HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <header className="experience__header">
          <h2 className="experience__title">Professional Experience</h2>
          <div className="experience__divider"></div>
        </header>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">{exp.title}</h3>
                <div className="timeline-item__company">{exp.company}</div>
                <div className="timeline-item__period">{exp.period}</div>
                <ul className="timeline-item__description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-item__technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}