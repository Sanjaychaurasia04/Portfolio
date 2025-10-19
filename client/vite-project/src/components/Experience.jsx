import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Data Analytics Intern",
      company: "IBM SkillsBuild Project – Decoding Data (CSRBOX)",
      period: "Jul 2025 – Aug 2025",
      description: [
        "Developed a Flood Prediction Model using Random Forest based on climatic and deforestation data.",
        "Cleaned, transformed, and analyzed large datasets to uncover data-driven insights.",
        "Delivered concise analytical reports and visualizations supporting environmental risk assessment.",
        "Collaborated with a team of data scientists to enhance predictive model accuracy."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Random Forest", "Data Visualization"]
    },
    {
      id: 2,
      title: "AI/ML Intern",
      company: "IBM SkillsBuild (Remote)",
      period: "Jul 2024 – Aug 2024",
      description: [
        "Developed an NLP-powered chatbot using IBM Watson to detect and address gender inequality scenarios.",
        "Deployed the chatbot on Wix for real-time awareness of legal rights and gender-related issues.",
        "Trained and tested language models to achieve 92% positive user feedback on intent accuracy.",
        "Created dialogue flow structures for efficient and context-aware chatbot responses."
      ],
      technologies: ["Python", "IBM Watson", "NLP", "DialogFlow", "Machine Learning"]
    },
    {
      id: 3,
      title: "Hackathon Experience",
      company: "Flipkart Grid 6.0, Adobe India Hackathon, FSM Hackathon 2025",
      period: "2024 – 2025",
      description: [
        "Built AI-based solutions and innovative prototypes under real-world problem statements.",
        "Developed a ‘Smart PDF Analyzer’ using NLP to extract context-aware data from PDFs, reducing manual search time by 70%.",
        "Created a Fruit & Vegetable Freshness Prediction system using CNNs, achieving 90% accuracy.",
        "Presented scalable and impactful AI-driven solutions in multiple national-level hackathons."
      ],
      technologies: ["TensorFlow", "OpenCV", "React.js", "Node.js", "AI/ML"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <header className="experience__header">
          <h2 className="experience__title">Professional Experience</h2>
          <div className="experience__divider"></div>
          <p className="experience__subtitle">
            A timeline of my professional journey — exploring data analytics, machine learning, and AI-driven problem-solving through impactful internships and hackathons.
          </p>
        </header>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-item__marker">
                <span className="timeline-dot"></span>
                {index < experiences.length - 1 && <span className="timeline-line"></span>}
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
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
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
