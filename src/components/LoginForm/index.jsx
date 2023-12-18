import { useState } from "react";
import { useNavigate } from '@tanstack/react-router';
import { loginUser } from "../../lib/api";
import "./loginform.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await loginUser(email, password);
      navigate({ to: "/profile" });
    } catch (error) {
      setErrorMessage(error.message + ", Invalid email or password");
    }
  };

  return (
    <>
      <div className="loginForm-wrapper">
        <form id="loginForm" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="login-inputfield-container">
            <div className="login-formfield">
              <label htmlFor="email-login" className="visually-hidden">Email</label>
              <input
                id="email-login"
                name="email"
                type="email"
                required
                placeholder="example@stud.noroff.no"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-formfield">
              <label htmlFor="paswd-login" className="visually-hidden">Password</label>
              <input
                id="paswd-login"
                name="password"
                type="password"
                required
                placeholder="Password"
                autoComplete="current-password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {errorMessage && <div className="error-message login-msg">{errorMessage}</div>}
          <div className="loginbtn-wrapper">
            <button type="submit" className="login-submit-btn">
              Login
            </button>

            <div className="not-member">
              Not a member yet?{" "}
              <a className="register-redirect" href="./register">
                Click here to register!
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
