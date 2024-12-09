import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        I'm <span>Pham Minh Tien</span>, Fullstack Developer Fresher
      </h1>
      <p>
        Hello! My name is Pham Minh Tien. I am 22 years old. I am a graduated
        from HCMUS-VNU. I am a Fullstack Developer Fresher from Go Vap District,
        Ho Chi Minh City. I am currently learning HTML, CSS, JavaScript, ReactJS
        and NodeJS. I am looking for a job as a Frontend Developer or Backend
        Developer or Fullstack Developer. I will eager to learn new things and
        improve my skills. I am passionate about technology and I am always
        looking for new opportunities to learn and grow.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
