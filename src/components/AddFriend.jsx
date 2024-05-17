import React, { useState } from "react";
import "./addfriend.css";
import Particle from "./Motion";
import { useNavigate } from "react-router-dom";

function AddFriends() {
  const navigate = useNavigate();
  const [requestStatus, setRequestStatus] = useState({});
  const [clicked, setClicked] = useState({});

  const handleRequestButton = (userId) => {
    setClicked((prev) => ({ ...prev, [userId]: true }));
    setTimeout(() => {
      setRequestStatus((prev) => ({ ...prev, [userId]: !prev[userId] }));
      setClicked((prev) => ({ ...prev, [userId]: false }));
    }, 1000);
  };

  const handleSkipButton = () => {
    navigate('/call');
  };

  const users = [
    { id: 1, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 2, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 3, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 4, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 5, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 6, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 7, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 8, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
    { id: 9, name: "okerekechukwu", imgSrc: "WhatsApp Image 2024-05-08 at 8.30.23 AM.jpeg" },
  
  ];

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
            {users.map((user) => (
              <div key={user.id}>
                <img src={user.imgSrc} alt="" />
                {user.name}{" "}
                <button
                  onClick={() => handleRequestButton(user.id)}
                  className={requestStatus[user.id] ? "request-sent" : ""}
                  style={
                    requestStatus[user.id]
                      ? { backgroundColor: "rgba(8, 72, 125, 0.5)", color: "white" }
                      : {}
                  }
                  disabled={clicked[user.id]}
                >
                  {clicked[user.id] ? "Sending..." : requestStatus[user.id] ? "Request sent" : "Add"}
                </button>
              </div>
            ))}
          </div>

          <div className="josh">
            <div className="con1">
              <h3>Add by Username or ID</h3>
              <label>
                <input type="text" placeholder="" />
              </label>
              <button>Add</button>
            </div>
            <div className="con2">
              <a href="#">continue</a>
              <button onClick={handleSkipButton}>Skip</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFriends;
