import React from "react";
import "./addfriend.css";
import Particle from "./Motion";

function AddFriends() {
  return (
    <>
      <Particle />
      <div className="container-addfriend">
        <div className="parent-div2">
          <h1>Add Friends</h1>
        </div>
        <div className="parent-div">
          <div className="cally">
            <h3 className="header">Suggested</h3>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />{" "}
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
            <div>
              <img src="WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" alt="" />
              okerekechukwu <button>Add</button>
            </div>
          </div>

          <div className="josh">
            <div className="con1">
              <h3>Add by Username or ID</h3>
              <label>
                <input type="text" placeholder="" />
              </label>
              <button>Add</button>
            </div>
            {/* <img src={Image1} alt="" />  */}
            <div className="con2">
              <a href="#">continue</a>
              <button>Skip</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFriends;
