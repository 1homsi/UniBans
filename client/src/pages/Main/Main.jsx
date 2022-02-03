import React from "react";
import MenuBar from "../../components/Menu/MenuBar";
import CustomModal from "../../components/Modal/CustomModal";
import { LeftSideBar, RightSideBar } from "../../components/SideBar/SideNav";
import { Login, Register } from "../User/Index";

function MainApp() {
  const [isOpenLogin, setModalOpenLogin] = React.useState(false);
  const [isOpenRegister, setModalOpenRegister] = React.useState(false);

  return (
    <div>
      <LeftSideBar />
      {isOpenLogin && (
        <CustomModal
          setOpenModal={setModalOpenLogin}
          Children={
            <>
              <Login isDone={setModalOpenLogin}></Login>
            </>
          }
        />
      )}
      {isOpenRegister && (
        <CustomModal
          setOpenModal={setModalOpenRegister}
          Children={
            <>
              <Register></Register>
            </>
          }
        />
      )}
      <RightSideBar
        IsOpenLogin={setModalOpenLogin}
        IsOpenRegister={setModalOpenRegister}
      />
    </div>
  );
}

export default class Main extends React.Component {
  render() {
    return <MainApp />;
  }
}
