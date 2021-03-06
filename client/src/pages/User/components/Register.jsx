import React, { useContext, useState } from "react";
import { /*Button,*/ Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../../../context/auth";
import { useForm } from "../../../util/hooks";

import { useNavigate } from "react-router-dom";

import "../styles/Register.scss";

const RegisterMain = (props) => {
  const nav = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [isSpace, setIsSpace] = useState(false);
  const [numAsFirst, setNumAsFirst] = useState(false);

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      nav("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    if (values.username.indexOf(" ") >= 0) {
      setIsSpace(true);
      return false;
    }
    if (!isNaN(values.username.charAt(0))) {
      setNumAsFirst(true);
      return false;
    }

    setIsSpace(false);
    setNumAsFirst(false);
    addUser();
  }

  return (
    <div>
      <h1 id="title">Register</h1>
      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <input
            placeholder="Username"
            name="username"
            type="text"
            value={values.username}
            error={errors.username ? true : false}
            onChange={onChange}
            className="form_input"
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={values.email}
            error={errors.email ? true : false}
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
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            error={errors.confirmPassword ? true : false}
            onChange={onChange}
            className="form_input"
          />
          <button type="submit" id="submit_btn">
            Register
          </button>
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
        {isSpace ? <p className="ui error message">Space Found</p> : <></>}
        {numAsFirst ? (
          <p className="ui error message">
            You cant user a number at the start
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export class Register extends React.Component {
  render() {
    return (
      <>
        <RegisterMain></RegisterMain>
      </>
    );
  }
}
