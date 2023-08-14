import React from "react";
import "./home.css";
import {
  FaGithubSquare,
  FaIdBadge,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import aaa from "../../assets/cv-2.pdf";

const Home = () => {
  return (
    <div className="app" id="home">
      <div className="container">
        <div className="wrapper">
          <div className="social">
            <a
              href="https://github.com/daniramdani10"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="icon" />
            </a>
            <a
              href="https://www.instagram.com/daniramdani10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/dani-ramdani10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
          <div className="summary">
            <div className="title">Front-end Developer</div>
            <div className="desc">
              A passionate Front-end Developer based in Jakarta.
            </div>
            <a
              href={aaa}
              target="_blank"
              rel="noopener noreferrer"
              download="cv-dani"
              className="btn "
            >
              SEE MY RESUME <FaIdBadge />
            </a>
          </div>
        </div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Home;
