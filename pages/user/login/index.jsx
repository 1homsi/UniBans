import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/user/Login.module.scss";

const Index = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [space, setSpaceFound] = useState(false);

  const userName = "1homsi";
  const userPassword = "12345678";

  const submitForm = (event) => {
    event.preventDefault();
    if (space) {
      return false;
    }

    if (name === userName && password === userPassword) {
      console.log(`${name} \n ${password}`);
      router.push("/");
    } else {
      console.log("error");
    }
  };

  return (
    <div className={styles.content}>
      <h1>Login</h1>
      {space ? <p className={styles.error}>Username has space</p> : <></>}
      <form className="form" onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            minLength="6"
            maxLength="12"
            placeholder="Username"
            required
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.includes(" ")) {
                setSpaceFound(true);
              } else {
                setSpaceFound(false);
              }
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="primary" type="submit">
            Login
          </button>
        </div>
      </form>
      <Link href="/user/register">Not a user? Register</Link>
      <Link href="/">Forgot password</Link>
    </div>
  );
};

export default Index;
