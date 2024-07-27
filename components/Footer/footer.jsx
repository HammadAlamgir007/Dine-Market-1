import React from "react";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import Aboutinfo from "./Aboutinfo";
import logo from "/src/assets/Logo.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="logo" />
          </a>
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container">
            <a href="https://twitter.com" aria-label="Twitter">
              <GrTwitter size={20} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <GrFacebookOption size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <GrLinkedinOption size={20} />
            </a>
          </div>
        </div>
        <Aboutinfo />
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2022 Dine Market</p>
        <p>
          Design by. <span>Weird Design Studio</span>
        </p>
        <p>
          Code by. <span>HammadAlamgir007 on GitHub</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
