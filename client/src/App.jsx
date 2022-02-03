import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Styles/App.scss";

import { AuthProvider } from "./context/auth";
// import AuthRoute from "./util/AuthRoute";

import Main from "./pages/Main/Main";
// import { Login, Register } from "./pages/User/Index";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function MainApp() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Route path="/about" component={About} />
          <Route exact path="/">
            <Main Content={<Home />} />
          </Route>

          {/* <AuthRoute exact path="/login" component={Login} /> */}
          {/* <AuthRoute exact path="/register" component={Register} /> */}
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
