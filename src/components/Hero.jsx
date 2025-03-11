import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="animate-hello">Hello 👋🏽</span><br />
            <p className="hero-subtitle animate-iam">I am </p>
            <span className="gradient-text animate-name">Ishan </span>
            <span className="animate-name-2">Siddhartha</span>
          </h1>
        </div>
        <div className="hero-bg-text animate-dev"><p>DEVELOPER</p></div>
    </div>
  );
};

export default Hero;
