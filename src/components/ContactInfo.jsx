import React from "react";
import "./css/ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="infoContainer">

      <h2>Get In Touch</h2>

      <p>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      <div className="infoItem">
        <h4>Email</h4>
        <span>gaurjahnavi2002@gmail.com</span>
      </div>

      <div className="infoItem">
        <h4>Location</h4>
        <span>India</span>
      </div>

      <div className="infoItem">
        <h4>LinkedIn</h4>
        <span>linkedin.com/in/jahnavigaur</span>
      </div>

      <div className="infoItem">
        <h4>GitHub</h4>
        <span>github.com/jahnavi-gaur</span>
      </div>

    </div>
  );
};

export default ContactInfo;