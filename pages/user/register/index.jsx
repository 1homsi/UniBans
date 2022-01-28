import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/user/Register.module.scss";

const Index = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [space, setSpaceFound] = useState(false);
  const [IsSame, SetSame] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    if (space || IsSame) {
      return false;
    }
    console.log(`${name} \n ${email} \n ${password}`);
    router.push("/user/login");
  };

  const IsPresent = (event) => {
    const response = "homsimohamad@gmail.com";
    const UsernameResponse = "homsimo";
    if (event === response || event === UsernameResponse) {
      console.log("duplicate email or username");
      SetSame(true);
    }
  };

  return (
    <div className={styles.content}>
      <h1>Register</h1>
      {space ? <p className={styles.error}>Username has space</p> : <></>}
      {IsSame ? (
        <p className={styles.error}>Username or email already found</p>
      ) : (
        <></>
      )}
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
              IsPresent(e.target.value);
              if (e.target.value.includes(" ")) {
                setSpaceFound(true);
              } else {
                setSpaceFound(false);
              }
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => {
              IsPresent(e.target.value);
              setEmail(e.target.value);
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
            Register
          </button>
        </div>
      </form>
      <Link href="/user/login">Already Have an account</Link>
    </div>
  );
};

export default Index;
