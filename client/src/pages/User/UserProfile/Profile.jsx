import React from "react";
import "./Profile.scss";
import { AuthContext } from "../../../context/auth";

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
                  <button className="color-b circule">
                    <i className="fab fa-dribbble fa-2x"></i>
                  </button>
                  <h2 className="title-2">Kingdom</h2>
                  <p className="followers">Kingdom Name</p>
                </div>
                <div className="grid-2">
                  <button className="color-c circule">
                    <i className="fab fa-behance fa-2x"></i>
                  </button>
                  <h2 className="title-2">Rank</h2>
                  <p className="followers">rank number</p>
                </div>
                <div className="grid-2">
                  <button className="color-d circule">
                    <i className="fab fa-github-alt fa-2x"></i>
                  </button>
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

export default Profile;
