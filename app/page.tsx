"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Niel Patel, Software Engineer";
  const typingSpeed = 150; // Adjust speed (in ms) for typing effect

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      {/* Background Layer */}
      <div className="background"></div>

      {/* Main Content */}
      <main className="main-content">
        {/* Typing Effect for "Software Intervention" */}
        <h1 className="typing-effect">{text}</h1>
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
