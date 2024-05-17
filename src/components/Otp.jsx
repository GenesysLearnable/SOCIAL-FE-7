import React from "react";
import "./Otp.css";
import { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App"
import image8 from "../assets/Layer 3.svg";
import image4 from "../assets/image4-removebg-preview (1).png";
import Particle from "./Motion";
import image1 from "../assets/arrow-left.svg";


const OTP = () => {
    const { email, otp, setPage } = useContext(RecoveryContext);
    const [timerCount, setTimer] = React.useState(60);
    const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
    const [disable, setDisable] = useState(true);
  
    function resendOTP() {
      if (disable) return;
      axios
        .post("#", {
          OTP: otp,
          recipient_email: email,
        })
        .then(() => setDisable(true))
        .then(() => alert("A new OTP has succesfully been sent to your email."))
        .then(() => setTimer(60))
        .catch(console.log);
    }
  
    function verfiyOTP() {
      if (parseInt(OTPinput.join("")) === otp) {
        setPage("reset");
        return;
      }
      alert(
        "The code you have entered is not correct, try again or re-send the link"
      );
      return;
    }
  
    React.useEffect(() => {
      let interval = setInterval(() => {
        setTimer((lastTimerCount) => {
          lastTimerCount <= 1 && clearInterval(interval);
          if (lastTimerCount <= 1) setDisable(false);
          if (lastTimerCount <= 0) return lastTimerCount;
          return lastTimerCount - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, [disable]);
  
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
                <h1>Enter the OTP</h1>
              </div>

              <div className="otp-text">
                <p>
                  We've sent you an OTP to your gmail address
                  example10@gmail.com
                </p>
              </div>
              <div className="otp-input">
                  <div >
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="#"
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>

                  <div >
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="#"
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="#"
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    ></input>
                  </div>
                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="#" 
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>

                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="#" 
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>

                  <div>
                    <input
                      maxLength="1"
                      type="text"
                      name=""
                      id="#" 
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    ></input>
                  </div>
              </div>

              <button className='verify'>Verify</button>
              <div className="input-box">
                <input type="Email" placeholder="Email Verification" required />
              </div>
              <button className='cancel'>Resend OTP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;
