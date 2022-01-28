import React, { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [space, setSpaceFound] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    if (space) {
      return false;
    }
    console.log(`${name} \n ${email} \n ${password}`);
  };

  return (
    <div>
      <h1>Login</h1>
      {space ? <p>Username has space</p> : <></>}
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
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
};

export default Index;
