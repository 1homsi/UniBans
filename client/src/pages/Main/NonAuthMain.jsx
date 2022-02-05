import React from "react";
import { Link } from "react-router-dom";

const NonAuthMain = () => {
  return (
    <div>
      <h1>Main Screen</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default NonAuthMain;
