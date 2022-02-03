import React from "react";
import { Link } from "react-router-dom";
import "./Side.scss";
import { AuthContext } from "../../context/auth";
import { Login, Register } from "../../pages/User/Index";
import CustomModal from "../Modal/CustomModal";

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
            />
            <div className="UserControlls">
              <button className="Userbutton" onClick={() => IsOpenLogin(true)}>
                Login
              </button>
              <button
                className="Userbutton"
                onClick={() => IsOpenRegister(true)}
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
