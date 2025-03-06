import './achievements.css';

export default function Achievements() {
  const achievementsData = [
    {
      title: "Cyber Security Sunshine State Event",
      description: "I had the opportunity to represent Florida Gulf Coast University at the Cyber Security Sunshine State event in Tampa, Florida. During the event, I spoke about our university’s programs, including the new Computer Science concentration and the Master’s program in Software Engineering. Additionally, I engaged with representatives from other cybersecurity-focused institutions and industry professionals, exchanging ideas on career development and advancements in the field.",
      image: "/cyberSunShine.jpg",
    },
    {
      title: "EagleX research presentation day",
      description: "Zero Trust Protects Logistic Management: A Dashboard App Development. Rooted in the principle of “Trust no one”, Zero Trust challenges traditional security paradigms by assuming that every user, device, and connection within a network could be potentially compromised. Logistic Management needs Zero Trust to protect its applications by creating defense techniques from cyber-attacks that target either front-end and back-end of the application. Based on our investigation, Drone-aided Logistic Management application can be more secured and organized by protecting the application from attacks such as Dos, MITM, and Blackholes. For instances, malicious files and Viruses can be easily injected into application without it ever being known. In this study, we developed a Drone-aided Logistic management Dashboard App to include Zero Trust into Logistic Management Applications. Our application is protected using Zero Trust model components such as, i) Function-based access control (FBAC), ii) HTTP Proxy, and iii) Cross-site-Scripting, to help produce an effective and efficient system to deliver products (e.g., parcel packages) to their consumers. By comparison with other autonomous logistic management approaches, our proposed application achieves fully autonomous of control policies in terms of listen, record, detect and defend. Furthermore, our application was also tested to be applied into other high-risk application scenarios such as IoT smart home, smart-grid, and smart vehicle networks. This project is conducted by FGCU Software Engineering students in the CEN 3078 Computer Security course. This application is open-source and licensed under the terms of the MIT license.",
      image: "/Research.jpg",
    }
  ];

  return (
    <div className="achievements-container">
      <h1 className="achievements-title">My Achievements</h1>
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <img src={achievement.image} alt={achievement.title} className="achievement-image" />
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
