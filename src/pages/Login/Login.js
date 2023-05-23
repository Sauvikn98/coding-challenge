import React, { useState } from "react";
import "./Login.css";
import Error from "../../assets/Group 2.svg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return;
    }
  };
  return (
    <div className="container">
      <div className="cover-photo"></div>
      <div className="login-form">
        <div className="rectangle-2">
          <div className="amazon-logo"> </div>
        </div>
        <div className="form">
          <div className="container-2">
            <h2 className="login-text">Login</h2>
            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:9ede06e3-b742-4d60-8dcb-49b6e3e9fc85;revision=0?component_id=13de306d-16f1-4c56-b31a-40891ad0351d&api_key=CometServer1&access_token=1684824993_urn%3Aaaid%3Asc%3AUS%3A9ede06e3-b742-4d60-8dcb-49b6e3e9fc85%3Bpublic_4207e903d2e52b3153a6e8074823514674e74643" className="main-logo"/>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="error">
                {emailError && (
                  <>
                    <img src={Error} alt="" />
                    <p className="error-text">{emailError}</p>
                  </>
                )}
              </div>

              <input type="password" placeholder="Password" />
              <div className="error"></div>
              <button type="submit">Sign In</button>
              <div className="additional-links">
                <p className="text-button1">Forgot Password?</p>
                <p className="text-button2">New User? Sign Up</p>
              </div>
            </form>
            <span className="or-text">or</span>
            <div className="social-buttons">
              <div>
                <button type="button" class="button">
                  <img src={Google} alt="google" className="google-icon" />
                  <div className="google-text">Continue with Google</div>
                </button>
              </div>

              <div>
                <button type="button" class="button">
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="facebook-icon"
                  />
                  <div className="facebook-text">Continue with Facebook</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
