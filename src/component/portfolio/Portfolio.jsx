import React from "react";
import "./portfolio.css";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="title flex-center">Personal Portfolio</div>
      <div className="app">
        <div className="container flex-column">
          <div className="project">
            <div className="img-project-portofolio"></div>
            <div className="title-porto">Personal Portfolio</div>
            <div className="desc-porto">
              My personal portfolio website to introduce myself and my expertise
            </div>
            <div className="build">REACT</div>
            <div className="row">
              <a
                href="https://github.com/daniramdani10/dani"
                target="_blank"
                rel="noreferrer"
                className="btn flex-center"
              >
                CODE <FaGithub />
              </a>
              <a
                href="https://dani-porto.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn flex-center"
              >
                DEMO
              </a>
            </div>
          </div>
          <div className="project">
            <div className="img-project-kasir"></div>
            <div className="title-porto">Kasir App</div>
            <div className="desc-porto">
              Cashier website to help the mobility of workers in a restaurant to
              count the number of customer orders
            </div>
            <div className="row">
              <div className="build ">REACT</div>
              <div className="build">BOOTSTRAP</div>
              <div className="build txt-build">JSON PLACEHOLDER</div>
            </div>
            <div className="row">
              <a
                href="https://github.com/daniramdani10/kasir"
                target="_blank"
                rel="noreferrer"
                className="btn flex-center"
              >
                CODE <FaGithub />
              </a>
              <a href="#nodemo" className="btn flex-center">
                DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
