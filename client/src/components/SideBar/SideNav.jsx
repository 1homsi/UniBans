import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Side.scss";
import { AuthContext } from "../../context/auth";
import UniButton from "../UniButton/UniButton";

function LeftSideBar() {
  return (
    <div>
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

function RightSideBar() {
  const { user, logout } = React.useContext(AuthContext);
  const nav = useNavigate();

  return (
    <div>
      <div className="RightSideNav">
        {user ? (
          <>
            <img
              className="UserImage"
              src={`https://avatars.dicebear.com/api/initials/${user.username.substring(
                0,
                2
              )}.svg`}
              alt=""
            />
            <div className="UserContainer">
              <h1
                className="UserName"
                onClick={() => {
                  navigator.clipboard.writeText(`@${user.username}`);
                }}
              >
                @{user.username}
              </h1>
            </div>
            <Link to="/profile">VIEW PROFILE</Link>
            <UniButton text="Logout" onClick={logout} />
          </>
        ) : (
          <>{nav("/login")}</>
        )}
      </div>
    </div>
  );
}

export { RightSideBar, LeftSideBar };
