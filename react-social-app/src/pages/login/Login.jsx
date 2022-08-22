import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import "./login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
              placeholder="Email"
              type="email"
              className="login-input"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              minLength={6}
              className="login-input"
              ref={password}
              required
            />
            <button className="login-btn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="secondary" size="30px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-btn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="success" size="30px" />
              ) : (
                "Create a New Accoutn"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
