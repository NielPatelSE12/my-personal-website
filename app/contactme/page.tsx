import './contactme.css';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa"; // Import Icons

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-text">
        Let's connect! You can reach me through the following platforms:
      </p>

      {/* Contact Information Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p><strong>Email:</strong></p>
          <a href="mailto:nielpatel1212@outlook.com">nielpatel1212@outlook.com</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <p><strong>LinkedIn:</strong></p>
          <a href="https://www.linkedin.com/in/niel-patel-359b62267/" target="_blank" rel="noopener noreferrer">
            Niel Patel
          </a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <p><strong>Phone:</strong></p>
          <a href="tel:+12392074746">239-207-4746</a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <p><strong>GitHub:</strong></p>
          <a href="https://github.com/">GitHub Profile</a>
        </div>
      </div>
    </div>
  );
}
