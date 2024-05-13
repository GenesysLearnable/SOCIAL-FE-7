import React from "react";
import "./Call.css";
import searchIcon from "../assets/searchIcon.png";
import callImg from "../assets/call-img.jpg";
import Musk from "../assets/musk.jpg";
import gates from "../assets/gates.jpg";
import otedollar from "../assets/otedollar.jpg";
import micButton from "../assets/micButton.jpg";
import speaker from "../assets/speaker.jpg";
import callIcon from "../assets/callIcon.jpg";
import offCamera from "../assets/offCamera.jpg";
import endColumn from "../assets/endColumn.jpg";
import addCircleIcon from "../assets/addCircleIcon.jpg";
import settingIcon from "../assets/settingIcon.jpg";
import Logo from "../assets/Layer 3 copy.svg";

const Call = () => {
  const DataItems = [
    { id: 1, name: "Maduka", img: callImg },
    { id: 2, name: "Gates", img: gates },
    { id: 3, name: "Otedola", img: otedollar },
    { id: 4, name: "Musk", img: Musk },
    { id: 5, name: "Maduka", img: callImg },
    { id: 6, name: "Gates", img: gates },
    { id: 7, name: "Otedola", img: otedollar },
    { id: 8, name: "Musk", img: Musk },
  ];

  // Child component of Call
  const SlideItem = ({ item }) => {
    return (
      <div className="slideItem">
        <img className="slideImg" src={item.img} alt="Image" />
        <span>{item.name}</span>
        <img src={endColumn} alt="Icon" className="slidecIcon" />
      </div>
    );
  };

  return (
    <div className="call-container">
      <img src={Logo} alt="" className="logo" />
      <div className="container-call">
        {/* Slide section */}
        <div className="slide">
          <div className="searchbar">
            <img src={searchIcon} className="icon1" />
            <input type="text" placeholder="Search friends" className="inp" />
          </div>
          <div className="slideDetails">
            {DataItems.map((item) => (
              <SlideItem item={item} key={item.id} />
            ))}
          </div>
          <div className="btnSection">
            <button className="slideBtn">
              <img
                src={addCircleIcon}
                alt="Add friend"
                className="slidePhoto"
              />
              Add friend
            </button>
            <button className="friendRequestBtn">Friend Request</button>
            <button className="slideBtn">
              <img src={settingIcon} alt="Setting" className="slidePhoto" />
              Setting
            </button>
          </div>
        </div>

        {/* Chat section */}
        <div className="chat">
          <img src={callImg} alt="Image" className="callImg" />
          <div className="square">
            <div className="circle"></div>
            <center>You</center>
          </div>
          <div className="feature">
            <img src={speaker} alt="Speaker" className="navIcon" />
            <img src={offCamera} alt="Off camera" className="navIcon" />
            <div>
              <img src={micButton} alt="Mic button" className="micButton" />
            </div>
            <img src={callIcon} alt="Call icon" className="callIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
