import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Particle from "../components/design";
import styles from "../styles/otp.module.css";
import { useSelector } from "react-redux";
import { useValidateOTPMutation } from "@/src/features/auth/userApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/src/features/auth/authSlice";
const OTP = () => {
  const {userInfo} = useSelector(state => state.auth);
  const [validate, {isLoading}] = useValidateOTPMutation();
  const [ user, setUser] = useState('');
  const [otp,setOtp] = useState('')
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    setUser(userInfo)
  },[userInfo])
  const validateOTP = async(e) => {
    e.preventDefault()
    try {
      const res= await  validate({email:user.email, newPassword:'Group@07', otp}).unwrap(); 
           
      router.push('/changepassword')
      dispatch(setCredentials(res))
      toast.success("OTP has been confirmed")
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  }
  const handleChange =(e) =>{
    setOtp(e.target.value)
  }
  
  
  

  return (
    <>
    <div className={styles["password-main-container"]} id="container">
      <Particle />
      <div className={styles["password-container"]}>
        <div className={styles["password-toggle-panel"]}>
          <div className={styles["write-up"]}>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/Layer_3_og2nrm.svg"
              alt="Layer 3"
            />
            <h2>Chill, we've got you !</h2>
          </div>
          <div className={styles.image}>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/image4-removebg-preview_1_bkbo0e.png"
              alt="Remove Background Preview"
            />
          </div>
        </div>

        <div className={styles["password-form-container"]}>
          <form className={styles["password-form-content"]} onSubmit={validateOTP}>
            <div className={styles["forget-text"]}>
              <div className={styles.icon}>
                <img
                  src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030522/SeeMe/arrow-left_y1wsd8.svg"
                  alt="Arrow Left"
                />
              </div>
              <h1>Forgot your password?</h1>
            </div>

            <div className={styles.text}>
              <p>
                {`We've sent the OTP to your email address `}
              </p>
            </div>

            <div className={styles["box-icon"]}>
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030530/SeeMe/sms_qjdq2o.svg"
                alt="SMS Icon"
              />
            </div>
            <div className={styles["email-input"]}>
              <input 
              type="text" 
              placeholder="Enter otp"
              value={otp}
              onChange={handleChange}/>
            </div>

            <button type="submit" className={styles.submit}>SignUp</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default OTP;
