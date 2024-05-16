import React from 'react'
import "./ChangePassword.css"
import image8 from "../assets/Layer 3.svg";
import image4 from "../assets/image4-removebg-preview (1).png";
import Particle from "./Motion";

const changePassword = () => {
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
                <h1>Change Password</h1>
              </div>

              <div className="change-password-input">
              <input type="password" placeholder="New Password" autoComplete="password" required />
              <input type="password" placeholder="Confirm New Password" autoComplete="password" required/>
              </div>

              <button className='submit'>Submit</button>
              <button className='cancel'>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default changePassword