import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-title">
        <h1>Subscribe to Our Newsletter</h1>
        <h3>Get the latest information and promo offers directly</h3>
      </div>

      <div className="newsletter-content">
        <div className="feature-background">Newsletter</div>
        <input
          type="text"
          placeholder="Enter your email address"
          className="newsletter-input"
        />
        <button className="newsletter-button">Get Started</button>
      </div>
    </section>
  );
};

export default Newsletter;
