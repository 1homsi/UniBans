import React from "react";
import MenuBar from "../../components/Menu/MenuBar";
import CustomModal from "../../components/Modal/CustomModal";
import { LeftSideBar, RightSideBar } from "../../components/SideBar/SideNav";
import { Login, Register } from "../User/Index";

function MainApp() {
  const [isOpen, setModalOpen] = React.useState(false);
  return (
    <div>
      <LeftSideBar />
      <MenuBar></MenuBar>
      <button onClick={() => setModalOpen(true)}>Open</button>
      {isOpen && (
        <CustomModal
          setOpenModal={setModalOpen}
          Children={
            <>
              <Login></Login>
            </>
          }
        />
      )}
      <RightSideBar />
    </div>
  );
}

export default class Main extends React.Component {
  render() {
    return <MainApp />;
  }
}
