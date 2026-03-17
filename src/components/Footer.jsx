import React from "react";
import "./css/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>Jahnavi</h2>
          <p>MERN Stack Developer building modern and scalable web applications.</p>
        </div>

        <div className="footer-right">

          <a href="https://github.com/jahnavi-gaur" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/in/jahnavigaur" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:gaurjahnavi2002@gmail.com">
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JahnaviGaur. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;