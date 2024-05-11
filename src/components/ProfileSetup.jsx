// ProfileSetup.jsx
import React, { useState } from "react";
import "./ProfileSetUp.css";
import image1 from "../assets/image3-removebg-preview.png";
import image2 from "../assets/avatar.png";

const ProfileSetup = () => {
  const [name, setName] = useState("John Doe");

  const handleSave = () => {
    alert(`Profile for ${name} saved!`);
  };

  return (
    <div className="profile-container">
      <div className="profile-left-section">
        <div className="profile-left-section-wrapper">
          <h1>
            Complete and <br /> connect!
          </h1>
          <div className="image">
             <img src={image1} />
          </div>
        </div>
      </div>

      <div className="profile-right-section">
        <div className="fixed-width">
          <div className="profile-right-section-wrapper">
            <p>
              Your User ID is #######.
              <br />
              Friends can add you through this PIN
            </p>
            <h2 className="setprofiles">Set Up Profile</h2>
            <div className="profile-image-wrapper">
            <img src={image2} />
            </div>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
