import React from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import { auth } from "./firebase";
import Home from "./Screens/Home/Home";
import Introductory from "./Screens/Introduction/Introductory";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setLoading(false);
      } else {
        setIsUserLoggedIn(false);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <Routes>
              {
                !isUserLoggedIn ?
                  <>
                    {/* This Section Contains all Screens a user can see without logging in */}
                    <Route index element={<Introductory />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                  </>
                  :
                  <>
                    {/* This Section Contains all Screens a logged in user should see */}
                    <Route index element={<Home />} />
                  </>
              }
            </Routes>
          </>
        )
      }
    </div>
  );
}

export default App;
