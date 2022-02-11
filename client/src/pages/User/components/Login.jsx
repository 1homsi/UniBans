import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../../../context/auth";
import { useForm } from "../../../util/hooks";
import { useNavigate } from "react-router-dom";

import "../styles/Login.scss";

function LoginMain(props) {
  const nav = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      nav("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="body">
      <h1 id="title">Login</h1>
      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
          id="login-form"
        >
          <lable>Username</lable>
          <Form.Input
            placeholder="Username.."
            name="username"
            type="text"
            value={values.username}
            error={errors.username ? true : false}
            onChange={onChange}
            className="form_input"
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={values.password}
            error={errors.password ? true : false}
            onChange={onChange}
            className="form_input"
          />
          <button type="submit" id="submit_btn">LogIn</button>
          <div id="link_container">
          <a href="" className="links">Forget Password?</a>
          <a href="register" className="links">Create An Account?</a>
          </div>
        </Form>
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <LoginMain></LoginMain>
      </>
    );
  }
}
