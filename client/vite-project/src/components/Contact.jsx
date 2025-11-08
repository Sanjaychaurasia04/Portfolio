import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <header className="contact__header">
          <h2 className="contact__title">Get In Touch</h2>
          <div className="contact__divider"></div>
          <p className="contact__subtitle">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </header>

        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              Whether you have a project in mind, want to collaborate, 
              or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="contact__methods">
              <div className="contact__method">
                <span className="contact__icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sanjaychaurasia0403@gmail.com" className="contact__link">
                    sanjaychaurasi22@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact__method">
                <span className="contact__icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sanjay-chaurasia-822001256/" 
                    className="contact__link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/sanjay-chaurasia-822001256
                  </a>
                </div>
              </div>
              
              <div className="contact__method">
                <span className="contact__icon">🐙</span>
                <div>
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/Sanjaychaurasia04/" 
                    className="contact__link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/Sanjaychaurasia04
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="contact__submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
