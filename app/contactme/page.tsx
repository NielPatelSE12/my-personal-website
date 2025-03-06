import './contactme.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-text">
        Feel free to reach out to me through the following channels:
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:nielpatel1212@outlook.com">nielpatel1212@outlook.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/niel-patel-359b62267/" target="_blank" rel="noopener noreferrer">Niel Patel</a></p>
        <p><strong>Phone:</strong> <a href="tel:+12392074746">239-207-4746</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/">GitHub Link</a></p>
      </div>
    </div>
  );
}
