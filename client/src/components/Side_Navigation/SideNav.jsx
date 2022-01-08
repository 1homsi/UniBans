import React from "react";
import "./SideNav.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userActions";

const SideNav = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const getFirstName = (name) => {
    return name.split(" ")[0][0];
  };
  const Name = getFirstName(userInfo.name);

  return (
    <div className="sidenav">
      {userInfo ? (
        <>
          <div id="profileImage">{Name}</div>
          <p>{userInfo.name}</p>
        </>
      ) : (
        <>
          <Link to="/signin">Try to sign in</Link>
        </>
      )}
      <a className="sidenavitem" href="#">
        About
      </a>
      <a className="sidenavitem" href="#">
        Services
      </a>
      <a className="sidenavitem" href="#">
        Clients
      </a>
      <a className="sidenavitem" href="#">
        Contact
      </a>
      <button
        onClick={() => {
          signoutHandler();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SideNav;
