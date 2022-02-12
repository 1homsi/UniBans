import React from "react";
import { AuthContext } from "../../../context/auth";
import "../styles/Profile.scss";

function Profile() {
  const { user } = React.useContext(AuthContext);
  return (
    <div className="ProfileContainer">
      <div className="grid-2 element-animation">
        <div className="card">
          <div className="card-content">
            <h1 className="title-2">Profile</h1>
            <h3>@{user.username}</h3>
            <p className="email">{user.email}</p>
            <hr className="hr" />
            <div className="container">
              <div>
                <div className="grid-1">
                  <h2 className="title">Rank</h2>
                  <p className="number">1</p>
                </div>
                <div className="grid-1">
                  <h2 className="title">points</h2>
                  <p className="number">100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
