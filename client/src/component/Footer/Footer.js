import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>
        🎓 This is a final year project of <strong>University of East London (UEL)</strong>, 
        built with <span className="highlight">passion</span> and{" "}
        <span className="highlight">blockchain</span> technology.
      </p>
      <p>
        🌐 View the source on{" "}
        <a
          href="https://github.com/SagarThapa2002"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        ❤️ Developed by{" "}
        <a
          href="https://github.com/SagarThapa2002"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Sagar Thapa
        </a>{" "}
        | &copy; {new Date().getFullYear()} dVoting App.
      </p>
    </div>
  </footer>
);

export default Footer;
