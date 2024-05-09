import React, { useState, useEffect } from "react";
import "./Auth.css";
import Image from "../assets/Happy_Bunch_Desk-removebg-preview.png";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
      title: "Just Push",
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
            />
            <input
              type="text"
              name="username"
              placeholder="Create Username"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
              required
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
            <div className="social-icons">
              <a href="#" className="icon">
                <FaGoogle />
              </a>
              <a href="#" className="icon">
                <FaFacebookF />
              </a>
              <a href="#" className="icon">
                <FaGithub />
              </a>
              <a href="#" className="icon">
                <FaLinkedinIn />
              </a>
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
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
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

          <div className="social-icons">
            <a href="#" className="icon">
              <FaGoogle />
            </a>
            <a href="#" className="icon">
              <FaFacebookF />
            </a>
            <a href="#" className="icon">
              <FaGithub />
            </a>
            <a href="#" className="icon">
              <FaLinkedinIn />
            </a>
          </div>
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
