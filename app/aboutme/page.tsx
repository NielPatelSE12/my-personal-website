import './aboutme.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <img 
        src="/selfimage.jpg" 
        alt="Profile" 
        className="about-image"
      />
      <p className="about-text">
        I am a dedicated Software Engineering student with a strong passion for technology and software development. My enthusiasm for coding drives me to continuously expand my knowledge and refine my skills throughout my career. From an early age, I have been fascinated by computers and their evolution over time.
      </p>
      <p className="about-text">
        Originally from Waco, Texas, I relocated to Florida at the age of three. Outside of academics, I am an avid sports fan, supporting the Texans, Astros, and Rockets. In my free time, I enjoy going to the gym, spending time with friends, and working on personal projects that enhance my technical and problem-solving abilities.
      </p>
      <p className="about-text">
        My ultimate career goal is to become a project manager, where I can leverage my technical expertise and leadership skills to drive innovation, foster company growth, and maintain a competitive edge in the industry.
      </p>
    </div>
  );
}
