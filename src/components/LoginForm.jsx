import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("John");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("password");

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("this");
    if (username && email && password) {
      login(username, email, password);
      console.log("this");
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app");
  }, [isAuthenticated, navigate]);

  return (
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
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
          required
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
          required
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
          required
        />
      </div>

      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
