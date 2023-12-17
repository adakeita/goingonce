import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { registerUser } from "../../lib/api";
import ShowIcon from "../../assets/eye.svg";
import HideIcon from "../../assets/eye-off.svg";
import "./registerform.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate({ to: "/login" });
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  // Handler functions
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(
      inputEmail.endsWith("@stud.noroff.no") || inputEmail === ""
    );
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsPasswordMatch(!confirmPassword || inputPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);
    setIsPasswordMatch(!password || password === inputConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.endsWith("@stud.noroff.no")) {
      setErrorMessage("*Please use your @stud.noroff.no email");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("*Passwords do not match");
      return;
    }

    try {
      const userData = { name, email, password, avatar };
      await registerUser(userData);
      setSuccessMessage("User created successfully. Redirecting to login...");
    } catch (error) {
      setErrorMessage(
        "Registration failed. Username or email may already be in use."
      );
    }
  };

  return (
    <div className="registerForm-container">
      <form id="registerForm" onSubmit={handleSubmit}>
        <h1>Register Account</h1>
        <div className="register-inputfield-wrapper">
          <div className="register-personalia-wrapper">
            <label htmlFor="name-register" className="visually-hidden">
              Username
            </label>
            <input
              className="register-name-input register-formfield"
              id="name-register"
              name="name"
              type="text"
              required
              placeholder="Username"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="avatar-register" className="visually-hidden">
              Avatar URL
            </label>
            <input
              className="register-avatar-input"
              id="avatar-register"
              name="avatar"
              type="url"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          <div className="register-email-container register-formfield {`register-email-input ${!isEmailValid ? 'invalid-email' : ''}`}">
            <label htmlFor="email-register" className="visually-hidden">
              Email
            </label>
            <input
              className="register-email-input"
              id="email-register"
              name="email"
              type="email"
              required
              placeholder="example@stud.noroff.no"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="message-container">
              {!isEmailValid && (
                <div className="email-validation-message" aria-live="polite">
                  *Please use a @stud.noroff.no email
                </div>
              )}
            </div>
          </div>
          <div className="paswd-register-container">
            <div className="paswd-register register-formfield">
              <label htmlFor="password-register" className="visually-hidden">
                Password
              </label>
              <input
                className={`register-password-input ${
                  !isPasswordMatch ? "invalid-password" : ""
                }`}
                id="password-register"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                autoComplete="new-password"
                minLength={8}
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className="view-input-btn bg-teal-700"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <div className="view-input-img-container">
                  <img
                    className="view-input-img"
                    src={showPassword ? HideIcon : ShowIcon}
                    alt={showPassword ? "Hide" : "Show"}
                  />
                </div>
              </button>
            </div>
            <div className="paswd-confirm register-formfield">
              <label
                htmlFor="confirm-password-register"
                className="visually-hidden"
              >
                Confirm Password
              </label>
              <input
                className={`register-confirm-password-input ${
                  !isPasswordMatch ? "invalid-password" : ""
                }`}
                id="confirm-password-register"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Confirm Password"
                autoComplete="new-password"
                minLength={8}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button
                className="view-input-btn bg-teal-700"
                type="button"
                onClick={toggleConfirmPasswordVisibility}
              >
                <div className="view-input-img-container">
                  <img
                    className="view-input-img"
                    src={showConfirmPassword ? HideIcon : ShowIcon}
                    alt={showConfirmPassword ? "Hide" : "Show"}
                  />
                </div>
              </button>
            </div>
            <div className="message-container">
              {!isPasswordMatch && confirmPassword && (
                <div className="password-match-message" aria-live="polite">
                  *Passwords do not match
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="message-container">
          {successMessage && (
            <div className="success-message" aria-live="assertive">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="error-message" aria-live="assertive">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="registerbtn-wrapper">
          <button type="submit" className="register-btn">
            Sign Up
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
  );
};

export default RegisterForm;
