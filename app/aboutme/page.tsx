import "./aboutme.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Main Content */}
      <div className="about-content">
        {/* Profile Section */}
        <div className="profile-section">
          <img src="/selfimage.jpg" alt="Profile" className="about-image" />
          <h1 className="about-title">Niel Patel</h1>
          <h2 className="about-subtitle">Software Engineer</h2>
        </div>

        {/* About Text */}
        <div className="about-text-section">
          <p className="about-text">
            I am a dedicated Software Engineering student with a strong passion for technology and software development. My enthusiasm for coding drives me to continuously expand my knowledge and refine my skills throughout my career.
          </p>
          <p className="about-text">
            Originally from Waco, Texas, I relocated to Florida at the age of three. Outside of academics, I am an avid sports fan, supporting the Texans, Astros, and Rockets. In my free time, I enjoy going to the gym, spending time with friends, and working on personal projects.
          </p>
          <p className="about-text">
            My ultimate career goal is to become a project manager, where I can leverage my technical expertise and leadership skills to drive innovation and foster company growth.
          </p>
        </div>
      </div>

      {/* Coding Languages Section */}
      <div className="languages-container">
        <h2 className="languages-title">Tech Stack</h2>
        <div className="languages-grid">
          <div className="language-card">
            {/*<img src="/cpp-icon.png"  className="language-icon" */}
            C++
          </div>
          <div className="language-card">
           {/* <img src="/python-icon.png"  className="language-icon" /> */}
            Python
          </div>
          <div className="language-card">
          {/*  <img src="/javascript-icon.png"  className="language-icon" /> */}
            JavaScript
          </div>
          <div className="language-card">
           {/* <img src="/css-icon.png" className="language-icon" /> */}
            CSS
          </div>
          <div className="language-card">
            {/*<img src="/html-icon.png" className="language-icon" /> */}
            HTML
          </div>
        </div>
      </div>


    {/* Coding Languages Section */}
    <div className="languages-container">
        <h2 className="languages-title">My Studys</h2>
        <div className="languages-grid">
          <div className="language-card">
            {/*<img src="/cpp-icon.png"  className="language-icon" */}
            College Attending: Florida Gulf Coast University
          </div>
          <div className="language-card">
           {/* <img src="/python-icon.png"  className="language-icon" /> */}
            Degree: Bachelors in Software Engineering
          </div>
          <div className="language-card">
          {/*  <img src="/javascript-icon.png"  className="language-icon" /> */}
            Hometown: Bonita Springs, Florida
          </div>
        </div>
      </div>

    </div>
  );
}
