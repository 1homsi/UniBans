import React from "react";
import { auth, db, firebase } from "../../firebase";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return auth.signInWithEmailAndPassword(email.trim(), password.trim());
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
