import React, { useContext } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

import { AuthProvider, AuthContext } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/Menu/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Chat from "./pages/Chat/chat";

function App() {
  const { user } = useContext(AuthContext);
  let loc = "";
  if (user) {
    loc = `/chat/${user.username}/combo`;
    console.log(user.username);
  } else {
    loc = `/chat/Guest/combo`;
  }

  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Link to={loc}>lol</Link>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute path="/chat/:name/:room" component={Chat} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
