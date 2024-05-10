// ProfileSetup.jsx
import React, { useState } from "react";
import "./ProfileSetUp.css"

const ProfileSetup = () => {
  const [name, setName] = useState("John Doe");

  const handleSave = () => {
    // Implement save functionality
    alert(`Profile for ${name} saved!`);
  };

  return (
    <div className="profile-container">
      <div className="profile-left-section">
        <div className="profile-left-section-wrapper">
          <h1>
            Complete and <br /> connect!
          </h1>
          <div className="imagery">
            <img src="../assets/happydesk.svg" alt="Happy Desk" />
          </div>
        </div>
      </div>

      <div className="profile-right-section">
        <div className="fixed-width">
          <div className="profilr-right-section-wrapper">
            <p>
              Your User ID is #######.
              <br />
              Friends can add you through this PIN
            </p>
            <h2 className="setprofiles">Set Up Profile</h2>
            <div className="profile-image-wrapper">
              <img
                src="data:image/jpeg;base64,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"
                alt="Profile placeholder"
              />
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
