import React from "react";
import "./About.scss";
import ReactLogo from "../../images/About.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mainAbout">
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus facilis aliquam voluptatum animi autem omnis illum,
                id perspiciatis magni magnam! Saepe eaque accusamus dignissimos
                qui quibusdam quas, officia voluptatem esse!
              </p>
              <div className="button">
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="social">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-discord"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="image-section">
            <img src={ReactLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
