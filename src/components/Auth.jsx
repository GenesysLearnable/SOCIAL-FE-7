import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

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
          <h1>Create Account</h1>
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
          <span>or use your email for registration</span>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
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
          <span>or use your email and password</span>
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
          <a href="#">Forgot Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
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
