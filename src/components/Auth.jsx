import React, { useState, useEffect } from "react";
import "./Auth.css";
import Image1 from "../assets/image1-removebg-preview.png";
import Image2 from "../assets/image2-removebg-preview.png";
import Image3 from "../assets/image3-removebg-preview.png";
import Image4 from "../assets/image4-removebg-preview (1).png";
import Image5 from "../assets/image5-removebg-preview.png";
import image7 from "../assets/Group.svg";
import image8 from "../assets/Layer 3.svg";
import image9 from "../assets/Frame 120.svg";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [messageIndex, setMessageIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const messages = [
    {
      src: Image3,
      text: "No more waiting or dialing, just talk",
    },
    {
      src: image9,
      text: "Seamless conversations, anytime, anywhere",
    },
    {
      src: Image2,
      text: "Connecting you, wherever you roam!",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      setImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((previous) => ({
      ...previous,
      [name]: value,
    }));
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
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <div className="agree">
            <input type="checkbox" className="checkBox" />
            <span className="terms">
              I agree to the terms and services and privacy policy
            </span>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="sign" onClick={handleLoginClick}>
          Sign In
        </p>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1 className="sign-text">Sign Up</h1>
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
            autoComplete="current-password"
          />
          <a href="#" className="forget-pswd">
            Forgot Password?
          </a>
          <button type="submit" className="sign-btn">
            Sign In
          </button>
          <div className="sign">
            <div className="line"></div>
            <span>Or</span>
            <div className="line"></div>
          </div>
          <p className="sign" onClick={handleRegisterClick}>
            Sign Up
          </p>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <div className="write-up">
              <img src={image8} />
              <h2>Welcome Back</h2>
            </div>
            <div className="image">
              <img src={Image5} />
            </div>
          </div>
          <div className="toggle-panel toggle-right">
            <div className="write-up">
              <img src={image8} />
              <p>{messages[messageIndex].text}</p>
            </div>
            <div className="image">
              <img src={messages[imageIndex].src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
