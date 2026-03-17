import React from "react";
import "./css/AboutSkills.css";

const skills = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "React",
  "Redux",
  "Redux Toolkit",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "REST APIs",
  "Responsive Design"
];

const AboutSkills = () => {
  return (
    <div className="skills-container">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutSkills;