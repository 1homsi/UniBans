import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Styles/App.scss";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import PrivateRoute from "./util/PrivateRoute";

import Main from "./pages/Main/Main";
import { Login, Register, Profile } from "./pages/User/Index";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NonAuthMain from "./pages/Main/NonAuthMain";

import { AuthContext } from "./context/auth";

function AuthApp() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<Main Content={<About />} />} />
        <Route exact path="/" element={<Main Content={<Home />} />} />
        <Route exact path="/profile" element={<PrivateRoute />}>
          <Route
            exact
            path="/profile"
            element={<Main Content={<Profile />} />}
          />
        </Route>
        <Route element={<Main Content={<Home />} />} />
        <Route path="*" element={<Main Content={<Home />} />} />
      </Routes>
    </>
  );
}

function NonAuthApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<NonAuthMain />} />
        <Route element={<Navigate to="/" />} />
        <Route exact path="/login" element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route exact path="/register" element={<AuthRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NonAuthMain />} />
      </Routes>
    </>
  );
}

const MainApp = () => {
  const { user } = React.useContext(AuthContext);
  return <>{user ? <AuthApp /> : <NonAuthApp />}</>;
};

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Container>
          <Router>
            <MainApp />
          </Router>
        </Container>
      </AuthProvider>
    );
  }
}
