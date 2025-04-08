import React from 'react';
import "./about.css";
import profilePic from "./pic.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="left-side">
        <h1 className="a-heading">About Me</h1>
        <p className="a-description">
          Hello, my name is Mostafa Waseem Mahmoud, and I am a 13-year-old MERN Stack web developer.
          I have a solid understanding of full-stack web development using the MERN Stack, which includes MongoDB, Express.js, React.js, and Node.js. 
        </p>
        <p className="a-description">
          I have hands-on experience in building dynamic and responsive web applications, from back-end server setups to front-end user interfaces.
          I am passionate about coding and continuously learning new technologies to enhance my skills.
        </p>
        <p className="a-description">
          My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
        </p>
      </div>
      <div className="right-side">
        <img src={profilePic} alt="Profile of Mostafa Waseem" className="profile-pic"/>
      </div>
    </div>
  );
}

export default About;
