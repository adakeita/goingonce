import { useState } from "react";
import { useNavigate } from '@tanstack/react-router';
import { loginUser } from "../../lib/api";

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
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="loginForm-container">
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="inputfield-wrapper">
            <label htmlFor="email" className="login-formfield-label">
              Email
            </label>
            <div className="login-formfield">
              <input
                id="email-login"
                name="email"
                type="email"
                required
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label htmlFor="password" className="login-formfield-label">
              Password
            </label>
            <div className="login-formfield">
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
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="loginbtn-wrapper">
            <button type="submit" className="btn">
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
