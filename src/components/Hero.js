import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: "url('/images/fish-market-428058_1280.jpg')" }}>
      <div className="hero-content">
        <h1>Fresh Fish Daily</h1>
        <p>From Moga to Table - Premium Quality Seafood</p>
        <a href="#products" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
};

export default Hero;
