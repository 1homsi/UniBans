import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SetDocTitle } from "./utils";
import SideNav from "./components/Side_Navigation/SideNav";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  SetDocTitle("UniBans");
  return (
    <div>
      <div>
        <SideNav></SideNav>
        <main>
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
