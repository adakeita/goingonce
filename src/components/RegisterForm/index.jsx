import { useState } from "react";
import { registerUser } from "../../lib/api";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
  
    try {
      const userData = {
        name,
        email,
        password,
        avatar, // Send avatar only if provided
      };
      const response = await registerUser(userData);
  
      // If registration is successful, log the details
      console.log("Registration Successful:", response.name, response.email);
      console.log("Logging in...");
  
      // automatically log in user?
      // const loginResponse = await loginUser(email, password);
      // console.log("Login Successful:", loginResponse.name, loginResponse.email, "Logged In:", true);
  
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="registerForm-container">
        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="inputfield-wrapper">
            <div className="register-formfield">
              <div className="personalia-wrapper">
                <label htmlFor="name">Name</label>
                <input
                  id="name-register"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="register-formfield">
                <label htmlFor="avatar">Avatar URL</label>
                <input
                  id="avatar-register"
                  name="avatar"
                  type="url"
                  placeholder="Avatar URL"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
            </div>
            <div className="register-formfield">
              <label htmlFor="email">Email</label>
              <input
                id="email-register"
                name="email"
                type="email"
                required
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-formfield">
              <label htmlFor="password">Password</label>
              <input
                id="password-register"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                autoComplete="new-password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="register-formfield">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                id="confirm-password-register"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Confirm Password"
                autoComplete="new-password"
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="registerbtn-wrapper">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
          <div className="is-member">
            Already a member?{" "}
            <a className="login-redirect" href="./login">
              Click here to login!
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
