import './project.css';

export default function Projects() {
  const projectData = [
    {
      title: "Hospital Management System",
      description: "For my Intro to Data Engineering class, I am collaborating with my fellow colleagues to establish a backend project in MySQL using PGAdmin. This system helps medical companies, such as hospitals, manage and store personal medical data.",
      image: "/images/expense-tracker.jpg",
    },
    {
      title: "iOS/Android Bluetooth Tracker for Homeland Security",
      description: "Collaborating with the Department of Homeland Security to develop an iOS application using Swift in Xcode. This app tracks Apple AirTags that may be used unethically. As part of a team of 10, divided into iOS and Android teams, I contribute to design, implementation, and testing phases.",
      image: "/images/sales-dashboard.jpg",
    },
    {
      title: "Personal Website",
      description: "I developed a personal website to showcase my professional skills, experience, and career updates. The website is built using the Next.js framework with TypeScript, enabling seamless integration of JavaScript and HTML within the same file for efficient and scalable development.",
      image: "/images/bluetooth-scanner.jpg",
    },
    {
      title: " Utilizing Machine Learning and Programming to Detect Traffic Safety Proto-cols for Impaired Drivers",
      description: "My study seeks to develop an innovative solution to enhance the driving experience for people of all ages, with a particular focus on supporting those with disabilities or age-related challenges, such as impaired vision or hearing. The primary objective is to design an advanced software system capable of detecting traffic lights, safety signs (e.g., ”One Way” signs) and providing real-time visual and auditory guidance through cutting-edge visualization and voice automation technology. In addition, the system will incorporate pedestrian and bicycle detection to ensure the safety of all road users and prevent potential accident involving motor vehicles.",
      image: "/images/inventory-system.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-text">Explore the projects I have worked on.</p>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
