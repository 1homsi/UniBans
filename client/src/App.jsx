import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Styles/App.scss";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import PrivateRoute from "./util/PrivateRoute";

import Main from "./pages/Main/Main";
import { Login, Register } from "./pages/User/Index";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Profile from "./pages/User/UserProfile/Profile";
import { AuthContext } from "./context/auth";

function AuthApp() {
  return (
    <Router>
      <Container>
        <Route path="/about">
          <Main Content={<About />} />
        </Route>
        <Route exact path="/">
          <Main Content={<Home />} />
        </Route>
        <PrivateRoute path="/profile">
          <Main Content={<Profile />} />
        </PrivateRoute>
      </Container>
    </Router>
  );
}

function NonAuthApp() {
  return (
    <>
      <h1>Hello world Login</h1>
      <Router>
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
      </Router>
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
        <MainApp />
      </AuthProvider>
    );
  }
}
