import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
      {/* Background Layer */}
      <div className="background"></div>

      {/* Main Content */}
      <main className="main-content">
        <h1>Niel Patel, Software Engineer</h1>
        <p>
          Hi, My name is Niel Patel. I am passionate about web development,
          particularly utilizing the React.js framework, as well as iOS
          application development using Swift within the Xcode integrated
          development environment.
        </p>
        <p>
          I’m currently improving my skills in C++, Swift, and Web Development
          using JavaScript, HTML, and CSS. My goal is to enhance my expertise in
          iOS application development using Swift within the Xcode integrated
          development environment. Additionally, I aim to further develop my web
          development skills, focusing on the React.js framework.
        </p>
      </main>
    </div>
  );
}
