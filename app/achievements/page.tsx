import './achievements.css';

export default function Achievements() {
  const achievementsData = [
    {
      title: "Cyber Security Sunshine State Event",
      description:
        "I had the opportunity to represent Florida Gulf Coast University at the Cyber Security Sunshine State event in Tampa, Florida. During the event, I spoke about our university’s programs, including the new Computer Science concentration and the Master’s program in Software Engineering. Additionally, I engaged with representatives from other cybersecurity-focused institutions and industry professionals, exchanging ideas on career development and advancements in the field.",
      image: "/cyberSunShine.jpg",
      icon: "🔒", // Cybersecurity Icon
    },
    {
      title: "EagleX Research Presentation Day",
      description:
        "Zero Trust Protects Logistic Management: A Dashboard App Development. Rooted in the principle of 'Trust no one,' Zero Trust challenges traditional security paradigms by assuming that every user, device, and connection within a network could be potentially compromised. Logistic Management needs Zero Trust to protect its applications by creating defense techniques from cyber-attacks...",
      image: "/Research.jpg",
      icon: "📊", // Research Presentation Icon
    },
  ];

  return (
    <div className="achievements-container">
      <h1 className="achievements-title">My Achievements</h1>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <span className="achievement-icon">{achievement.icon}</span>
            <img
              src={achievement.image}
              alt={achievement.title}
              className="achievement-image"
            />
            <h2 className="achievement-title">{achievement.title}</h2>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
