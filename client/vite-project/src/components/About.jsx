import './About.css';

export default function About() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "Python", "Django", "REST APIs"]
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Docker", "VS Code"]
    },
    {
      category: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy"]
    }
  ];

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__container">
        <header className="about__header">
          <h2 id="about-heading" className="about__title">About Me</h2>
          <div className="about__divider"></div>
        </header>
        
        <div className="about__content">
          <div className="about__text">
            <p className="about__description">
              I'm a passionate Full Stack Developer with expertise in modern web technologies 
              and artificial intelligence. With a strong foundation in computer science and 
              hands-on experience in building scalable applications, I enjoy turning complex 
              problems into simple, beautiful solutions.
            </p>
            <p className="about__description">
              My journey in technology started with curiosity about how software works, 
              and it has evolved into a career where I continuously learn and adapt to 
              new technologies. I'm particularly interested in the intersection of web 
              development and AI, creating intelligent applications that enhance user experiences.
            </p>
            <p className="about__description">
              When I'm not coding, you can find me exploring new tech trends, contributing 
              to open-source projects, or working on personal AI projects. I believe in 
              writing clean, maintainable code and following best practices.
            </p>
          </div>
          
          <div className="about__skills">
            <h3 className="about__skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category__title">{skillGroup.category}</h4>
                  <ul className="skill-list" role="list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item">
                        <span className="skill-icon">▹</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
