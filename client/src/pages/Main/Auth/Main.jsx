import React from "react";
import { LeftSideBar, RightSideBar } from "../../../components/SideBar/SideNav";

function Main({ Content }) {
  return (
    <div>
      <LeftSideBar />
      <div>{Content}</div>
      <RightSideBar />
    </div>
  );
}

export default Main;
