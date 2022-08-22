import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don`t match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/react-social-network/login");
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Untrusted</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Untrusted.
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="text"
              className="login-input"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="login-input"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
              ref={password}
              required
              minLength={6}
            />
            <input
              placeholder="Password Again"
              type="password"
              className="login-input"
              ref={passwordAgain}
              minLength={6}
              required
            />
            <button className="login-btn" type="submit">
              Sign Up
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-btn">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
