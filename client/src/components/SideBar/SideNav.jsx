import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Side.scss";
import { AuthContext } from "../../context/auth";

function LeftSideBar() {
  return (
    <div>
      <div className="TopSide">
        <br />
        <br />
      </div>
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Placeholder</Link>
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
                1
              )}.svg`}
              alt=""
            />
            <div className="UserContainer">
              <h1 className="UserName">@{user.username}</h1>
              <i
                class="far fa-copy"
                onClick={() => {
                  navigator.clipboard.writeText(`@${user.username}`);
                }}
              ></i>
            </div>
            <Link to="/profile">view Profile</Link>
            <button className="Userbutton" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>{nav("/login")}</>
        )}
      </div>
    </div>
  );
}

export { RightSideBar, LeftSideBar };
