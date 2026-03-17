import React from "react";
import "./css/AboutJourney.css";

const journeyData = [
  {
    id: 1,
    title: "Learning Web Development",
    desc: "My journey started with learning the fundamentals of HTML, CSS, and JavaScript which helped me understand how websites are structured and styled."
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "After learning the basics, I started building user interfaces using React and explored modern frontend concepts like components, state, and routing."
  },
  {
    id: 3,
    title: "Full Stack Development",
    desc: "Currently, I am building full-stack web applications using the MERN stack while continuously improving my coding and problem-solving skills."
  }
];

const AboutJourney = () => {
  return (
    <div className="journey-container">

      <h2 className="journey-title">My Journey</h2>

      <div className="journey-grid">
        {journeyData.map((item) => (
          <div key={item.id} className="journey-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutJourney;