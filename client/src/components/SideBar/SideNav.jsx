import React from "react";
import { Link } from "react-router-dom";
import "./Side.scss";
import { AuthContext } from "../../context/auth";

function LeftSideBar() {
  return (
    <div>
      <div className="sidenav">
        <Link to="/about">About</Link>
        <Link to="/profile">Profile (Testing) </Link>
        <Link to="/">Placeholder</Link>
        {/* <Link to="/">Placeholder</Link>
        <Link to="/">Placeholder</Link>
        <Link to="/">Placeholder</Link>
        <Link to="/">Placeholder</Link> */}
      </div>
    </div>
  );
}

function RightSideBar({ IsOpenLogin, IsOpenRegister }) {
  const { user, logout } = React.useContext(AuthContext);

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
            <h1 className="UserName">{user.username}</h1>
            <button className="Userbutton" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <img
              className="UserImage"
              src={`https://avatars.dicebear.com/api/initials/G.svg`}
              alt=""
            />
            <div className="UserControlls">
              <button
                className="Userbutton"
                onClick={() => {
                  IsOpenLogin(true);
                  IsOpenRegister(false);
                }}
              >
                Login
              </button>
              <button
                className="Userbutton"
                onClick={() => {
                  IsOpenLogin(false);
                  IsOpenRegister(true);
                }}
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export { RightSideBar, LeftSideBar };
