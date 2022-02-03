import React from "react";
import { Link } from "react-router-dom";
import "./Side.scss";

function LeftSideBar() {
  return (
    <div>
      <div className="sidenav">
        <Link href="#">Placeholder</Link>
        <Link href="#">Placeholder</Link>
        <Link href="#">Placeholder</Link>
        <Link href="#">Placeholder</Link>
      </div>
    </div>
  );
}

function RightSideBar() {
  return (
    <div>
      <div className="RightSideNav">
        <Link href="#">Placeholder</Link>
        <Link href="#s">Placeholder</Link>
        <Link href="#">Placeholde</Link>
        <Link href="#">Placeholder</Link>
      </div>
    </div>
  );
}

export { RightSideBar, LeftSideBar };
