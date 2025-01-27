import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="./images/ab.jpg" alt="About Moga Fish" className="about-img" />
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">Welcome to Moga Fish</h3>
            <p className="about-description">
              Your premier destination for the finest seafood. With over 20 years of experience, we pride ourselves on
              delivering the freshest fish straight from local fishermen to your table.
            </p>
            <p className="about-description">
              Our commitment to quality and sustainability ensures that you receive only the best seafood while
              supporting responsible fishing practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;