import React from "react";
// import CustomModal from "../../components/Modal/CustomModal";
import { LeftSideBar, RightSideBar } from "../../components/SideBar/SideNav";
// import { Login, Register } from "../User/Index";

function Main({ Content }) {
  // const [isOpenLogin, setModalOpenLogin] = React.useState(false);
  // const [isOpenRegister, setModalOpenRegister] = React.useState(false);

  return (
    <div>
      <LeftSideBar />
      <div>{Content}</div>
      <RightSideBar
      // IsOpenLogin={setModalOpenLogin}
      // IsOpenRegister={setModalOpenRegister}
      />
    </div>
  );
}

export default Main;
