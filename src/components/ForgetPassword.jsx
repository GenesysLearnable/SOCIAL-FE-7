import React from "react";
import "./ForgetPassword.css";
import image8 from "../assets/Layer 3.svg";
import image4 from "../assets/image4-removebg-preview (1).png";
import Particle from "./Motion";
import image1 from "../assets/arrow-left.svg"
import image2 from "../assets/sms.svg"

const ForgetPassword = () => {
  return (
    <>
      <div className="password-main-container" id="container">
        <Particle />
        <div className="password-container">
          <div className="password-toggle-panel">
            <div className="write-up">
              <img src={image8} />
              <h2>Chill, we've got you !</h2>
            </div>
            <div className="image">
              <img src={image4} />
            </div>
          </div>

          <div className="password-form-container">
            <form className="password-form-content">
              <div className="forget-text">
                <div className="icon">
                    <img src={image1} alt="" />
                </div>
                <h1>Forgot your password?</h1>
              </div>

              <div className="text">
                <p>
                  Enter your registered Email & we'll send you an OTP to reset
                  your password
                </p>
              </div>

              <div className="box-icon">
                <img src={image2} alt="" />
              </div>
              <div className="email-input">
              <input type="email" placeholder="Email" autoComplete="email" />
              </div>

              <button>Send OTP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
