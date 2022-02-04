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

function MainApp() {
  return (
    <AuthProvider>
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

          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <MainApp />
      </>
    );
  }
}
