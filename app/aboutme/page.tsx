import Image from 'next/image';
import "./aboutme.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Main Content */}
      <div className="about-content">
        {/* Profile Section */}
        <div className="profile-section">
          <h1 className="about-title">Niel Patel</h1>
          <h2 className="about-subtitle">Software Engineer</h2>
        </div>

        {/* About Text */}
        <div className="about-text-section">
          <p className="about-text">
            I am a dedicated Software Engineering student with a strong passion for technology and software development...
          </p>
        </div>
      </div>
    </div>
  );
}
