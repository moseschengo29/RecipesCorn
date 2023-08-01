import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("John");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("password");

  return (
    <form className="login-form">
      <h1 className="form-title">
        Login to begin looking at all our recipes...
      </h1>
      <div className="form-inputs">
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          id="username"
        />
      </div>

      <div className="form-inputs">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
        />
      </div>

      <div className="form-inputs">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
        />
      </div>

      <button
        onClick={(e) => e.preventDefault()}
        type="submit"
        className="login-btn"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
