import React, { useState, useEffect } from "react";
import "./Auth.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import Image2 from "../assets/image2-removebg-preview.png";
import Image3 from "../assets/image3-removebg-preview.png";
import Image5 from "../assets/poieeie_1-removebg-preview.png";
import image7 from "../assets/Group.svg";
import image8 from "../assets/Layer 3.svg";
import image9 from "../assets/Frame 120.svg";
import Particle from "./Motion";
import { setCredentials } from "../features/slices/authSlice";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../features/slices/userApiSlice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [register, { loadingRegister }] = useRegisterMutation();
  const [isActive, setIsActive] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [messageIndex, setMessageIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const history = useNavigate();
  const dispatch = useDispatch();
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
    }, 5000);

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
    handleRegisterButton;
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  const handleRegisterButton = async (e) => {
    e.preventDefault();
    try {
      const res = await register(userInput).unwrap();
      console.log(userInput);
      history("/setup");
      dispatch(setCredentials({ ...res }));
      toast.success(`Welcome ${res.username}!`);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };
  const handleLoginButton = async (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    const userInfo = { email, password };

    try {
      const res = await login(userInput).unwrap();
      console.log(userInfo);
      history("/addfriends");
      dispatch(setCredentials({ ...res }));
      toast.success("Login successful!!");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };
  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <Particle />
      <div className="continer-content">
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit} className="form-content">
            <h1 className="header">Create Account</h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              autoComplete="email"
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
            <button type="submit" onClick={handleRegisterButton}>
              {loadingRegister ? "loading..." : "Signup"}
            </button>
            <div className="sign">
              <div className="line"></div>
              <span className="txt-li">Or</span>
              <div className="line"></div>
            </div>
            <p className="continue">Continue With</p>
            <Link to={"/auth/google"}>
              <button type="submit" className="google-btn">
                <img src={image7} />
                Google
              </button>
            </Link>

            <div className="account">
              <span>Already have an account? </span>
              <p className="sign" onClick={handleLoginClick}>
                Sign In
              </p>
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
              autoComplete="current-password"
            />
            <a href="#" className="forget-pswd">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="sign-btn"
              onClick={handleLoginButton}
            >
              {isLoading ? "loading..." : "Sign in"}
            </button>
            <div className="sign">
              <div className="line"></div>
              <span className="txt-li">Or</span>
              <div className="line"></div>
            </div>
            <p className="continue">Continue With</p>
            <Link to={"/auth/google"}>
              <button type="submit" className="google-btn">
                <img src={image7} />
                Google
                {}
              </button>
            </Link>
            <div className="account">
              <span className="txt-ac">Don't have an account? </span>
              <p className="sign" onClick={handleRegisterClick}>
                Sign Up
              </p>
            </div>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <div className="write-up">
                <img src={image8} />
                <h2>Welcome Back</h2>
              </div>
              <div className="image">
                <img src={Image5} />
              </div>
            </div>

            <div className="toggle-panel toggle-left">
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
    </div>
  );
};

export default Auth;
