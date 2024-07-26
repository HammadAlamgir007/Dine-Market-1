import React from "react";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import Aboutinfo from "./Aboutinfo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
        <a href="/" className="navbar-logo">
          <img src="/src/assets/Logo.png" alt="logo" />
        </a>
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

      </div>
        <Aboutinfo/>
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
