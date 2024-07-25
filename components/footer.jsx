import React from "react";
import logo from "../src/assets/Logo.png";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
        <img src="/src/assets/Logo.png" alt="logo" />
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container">
            <div>
              <GrTwitter size={20} />
            </div>
            <div>
              <GrFacebookOption size={20} />
            </div>
            <div>
              <GrLinkedinOption size={20} />
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
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
