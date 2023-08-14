import React from "react";
import "./about.css";
import { FaCss3, FaHtml5, FaJs, FaNpm, FaReact, FaVuejs } from "react-icons/fa";

const About = () => {
  return (
    <div className="app" id="about">
      <div className="container">
        <div className="techstack">
          <div className="title-about">Tech Stack</div>

          <div className="icon-techh">
            <div className="tooltip">
              <FaHtml5 className="icon-tech" />
              <span className="tooltiptext">HTML</span>
            </div>
            <div className="tooltip">
              <FaCss3 className="icon-tech" />
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="tooltip">
              <FaJs className="icon-tech" />
              <span className="tooltiptext">JS</span>
            </div>
          </div>
          <div className="icon-techh">
            <div className="tooltip">
              <FaReact className="icon-tech" />
              <span className="tooltiptext">React JS</span>
            </div>
            <div className="tooltip">
              <FaVuejs className="icon-tech" />
              <span className="tooltiptext">Vue JS</span>
            </div>
            <div className="tooltip">
              <FaNpm className="icon-tech" />
              <span className="tooltiptext">NPM</span>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="title-about">About me</div>
          <div className="desc-about">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Vue, Express. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
