import React from "react";
import { AuthContext } from "../../../context/auth";
import "../styles/Profile.scss";

function Profile() {
  const { user } = React.useContext(AuthContext);
  return (
    <div>
      <div className="grid-7 element-animation">
        <div className="card color-card-2">
          <div className="card-content">
            <h1 className="title-2">Profile</h1>
            {user ? (
              <>
                <h3>@{user.username}</h3>
                <div className="padd" />
                <p className="job-title">{user.email}</p>
              </>
            ) : (
              <></>
            )}
            <hr className="hr-2" />
            <div className="container">
              <div className="content">
                <div className="grid-2">
                  <h2 className="title-2">Kingdom</h2>
                  <p className="followers">Kingdom Name</p>
                </div>
                <div className="grid-2">
                  <h2 className="title-2">Rank</h2>
                  <p className="followers">rank number</p>
                </div>
                <div className="grid-2">
                  <h2 className="title-2">points</h2>
                  <p className="followers">points</p>
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
