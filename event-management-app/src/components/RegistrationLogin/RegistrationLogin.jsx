import React, { useEffect, useState } from "react";
import emailIcon from "./email.png";
import userIcon from "./person.png";
import "./RegistrationLogin.css";
import HomePage from "../HomePage/HomePage";
import OrgHomePage from "../OrgHomePage/OrgHomePage";

const RegistrationLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [useUsername, setUseUsername] = useState(true);
  const [showBlankPage, setShowBlankPage] = useState(false);

  useEffect(() => {
    if (!showBlankPage) {
      // Add login page styles when the page is active
      document.body.classList.add("reg-body");
    } else {
      // Cleanup styles when switching to HomePage
      document.body.classList.remove("reg-body");
      document.body.classList.add("home-body");
    }

    // Remove styles on component unmount
    return () => {
      document.body.classList.remove("reg-body");
      document.body.classList.remove("home-body");
    };
  }, [showBlankPage]);

  // Validate input fields
  const validateAndProceed = () => {
    if (isLogin) {
      // For Login
      if (useUsername && !username.trim()) {
        alert("Username cannot be empty!");
        return;
      }
      if (!useUsername && (!email.trim() || !email.endsWith("@nitc.ac.in"))) {
        alert("Invalid or empty email! Email must end with @nitc.ac.in.");
        return;
      }
    } else {
      // For Sign Up
      if (!username.trim()) {
        alert("Username cannot be empty!");
        return;
      }
      if (!email.trim() || !email.endsWith("@nitc.ac.in")) {
        alert("Email must end with @nitc.ac.in");
        return;
      }
    }

    // If validation passes, proceed to the blank page
    setShowBlankPage(true);
  };

  const handleSignUp = () => {
    console.log(`Sign Up clicked! Role: ${role}`);
    validateAndProceed();
  };

  const handleLogin = () => {
    console.log(`Login clicked! Role: ${role}`);
    validateAndProceed();
  };

  const switchToSignUp = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleInputType = () => {
    setUseUsername(!useUsername);
  };

  if (showBlankPage) {
    if (role === "Student") {
      return <HomePage />;
    } else if (role === "Organizer") {
      return <OrgHomePage />;
    }
    // return (
    //   <div className="container">
    //     <h1>Welcome to the Blank Page!</h1>
    //   </div>
    // );
  }

  return (
    <div className="reg-container">
      <div className="reg-header">
        <div className="reg-text">{isLogin ? "Login" : "Sign Up"}</div>
        <div className="reg-underline"></div>
      </div>
      <div className="reg-inputs">
        {isLogin ? (
          // Login Page
          <>
            <div className="reg-input">
              {useUsername ? (
                <>
                  <img src={userIcon} alt="User icon" />
                  <input
                    type="text"
                    placeholder="Enter your username or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <img src={emailIcon} alt="Email icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )}
            </div>
            {/* <div className="input">
              <button className="submit secondary" onClick={toggleInputType}>
                Use {useUsername ? "Email" : "Username"} Instead
              </button>
            </div> */}
            <div className="reg-input">
              <select
                value={role}
                onChange={handleRoleChange}
                className="reg-dropdown"
              >
                <option value="Student">Student</option>
                <option value="Organizer">Organizer</option>
              </select>
            </div>
            <div className="reg-submit-container">
              <button className="reg-submit" onClick={handleLogin}>
                Login
              </button>
              <div className="reg-footer">
                <p className="reg-already-account">Don't have an account?</p>
                <button
                  className="reg-submit secondary"
                  onClick={switchToSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </>
        ) : (
          // Sign Up Page
          <>
            <div className="reg-input">
              <img src={userIcon} alt="User icon" />
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="reg-input">
              <img src={emailIcon} alt="Email icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="reg-input">
              <select
                value={role}
                onChange={handleRoleChange}
                className="reg-dropdown"
              >
                <option value="Student">Student</option>
                <option value="Organizer">Organizer</option>
              </select>
            </div>
            <div className="reg-submit-container">
              <button className="reg-submit" onClick={handleSignUp}>
                Sign Up
              </button>
              <div className="reg-footer">
                <p className="reg-already-account">Already have an account?</p>
                <button
                  className="reg-submit secondary"
                  onClick={switchToLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationLogin;
