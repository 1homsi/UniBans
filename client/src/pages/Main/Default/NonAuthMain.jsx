import React from "react";
import { Link } from "react-router-dom";
import "./NonAuthMain.scss";

const NonAuthMain = () => {
  return (
    <div>
      <nav className="nav">
        <h1>UNIBANS</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <div className="containers">
        <div className="box1">
          <h2>Welcome to UNIBANS</h2>
          <br />
          <br />
          <br />
        </div>
        <div className="box2">
          <h2>What is UNIBANS?</h2>
          <br />
          <br />
          <br />
        </div>
        <div className="box3">
          <h2>How to use UNIBANS?</h2>
          <br />
          <br />
          <br />
        </div>
        <div className="box4">
          <h2>Contact Us</h2>
          <br />
          <br />
          <br />
        </div>
        <div className="box5">
          <h2>About Us</h2>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default NonAuthMain;
