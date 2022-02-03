import React from "react";
import MenuBar from "../../components/Menu/MenuBar";
import { LeftSideBar, RightSideBar } from "../../components/SideBar/SideNav";

function MainApp() {
  return (
    <div>
      <LeftSideBar />
      <MenuBar></MenuBar>
      <RightSideBar />
    </div>
  );
}

export default class Main extends React.Component {
  render() {
    return <MainApp />;
  }
}
