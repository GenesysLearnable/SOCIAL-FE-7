import React, { useState, useEffect } from "react";
import "./Auth.css";


const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    {
      title: "SeeMe",
      text: "Connecting you, wherever you roam!",
    },
    {
      title: "InstantChat",
      text: "Seamless conversations, anytime, anywhere",
    },
    {
      title: "Welcome Back",
      text: "No more waiting or dialing, just talk",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((prevIndex) =>
        prevIndex === 0 ? 1 : prevIndex === 1 ? 2 : 0
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <h1 className="header">Create Account</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              type="text"
              name="username"
              placeholder="Create Username"
              onChange={handleChange}
              required
              autoComplete="username"
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
            <div className="agree">
              <input type="checkbox" className="checkBox" />
              <span className="terms">
                I agree to the terms and services and privacy policy
              </span>
            </div>
            <button>Sign Up</button>
            <div className="sign">
              <div className="line"></div>
              <span>Or</span>
              <div className="line"></div>
            </div>
          </div>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1 className="sign-text">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleChange}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
            autoComplete="password"
          />
          <a href="#" className="forget-pswd">
            Forgot Password?
          </a>
          <button className="sign-btn">Sign In</button>

          <div className="sign">
            <div className="line"></div>
            <span>Or</span>
            <div className="line"></div>
          </div>

          <p>Continue with</p>

          
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <div className="write-up">
              <h2>{messages[messageIndex].title}</h2>
              <p>{messages[messageIndex].text}</p>
            </div>
            <div className="image">
              <img src={Image} alt="" />
            </div>
            <button className="hidden" id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <div className="write-up">
              <h2>{messages[messageIndex].title}</h2>
              <p>{messages[messageIndex].text}</p>
            </div>
            <div className="image">
              <img src={Image} alt="" />
            </div>
            <button
              className="hidden"
              id="register"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
