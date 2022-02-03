import React from "react";
import { Link } from "react-router-dom";
import "./Side.scss";

function LeftSideBar() {
  return (
    <div>
      <div className="sidenav">
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#clients">Clients</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}

function RightSideBar() {
  return (
    <div>
      <div className="RightSideNav">
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#clients">Clients</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}

export { RightSideBar, LeftSideBar };
