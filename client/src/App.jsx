import React from "react";

//Router and router elements
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//scss imports
import "./Styles/App.scss";

//Private Routes
import AuthRoute from "./util/AuthRoute";
import PrivateRoute from "./util/PrivateRoute";

//Route imports
import { Login, Register, Profile } from "./pages/User/Index";
import { Home, About } from "./Routes/AuthRoutes";

//Main Contents import
import Main from "./pages/Main/Auth/Main";
import NonAuthMain from "./pages/Main/Default/NonAuthMain";

//User Auth import
import { AuthProvider, AuthContext } from "./context/auth";

function AuthApp() {
  return (
    <>
      <div className="MainContent">
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
      </div>
    </>
  );
}

function NonAuthApp() {
  return (
    <>
      <div className="MainContentNonAuth">
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
      </div>
    </>
  );
}

//Component that checks if user is logged in if yes it will show them the Homepage
//if not it will redirect the user to a basic page
const MainApp = () => {
  const { user } = React.useContext(AuthContext);
  return <>{user ? <AuthApp /> : <NonAuthApp />}</>;
};

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <MainApp />
        </Router>
      </AuthProvider>
    );
  }
}
