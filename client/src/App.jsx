import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Styles/App.scss";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import Main from "./pages/Main/Main";
import { Login, Register } from "./pages/User/Index";

function MainApp() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Route exact path="/" component={Main} />
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
