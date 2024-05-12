import React from "react";
import "./Call.css"
import otedollar from "../assets/callAssets/otedollar.jpg"
// import image from "../assets/callAssets/fluent_camera-off-16-filled.svg";
import searchIcon from "../assets/callAssets/searchIcon.png"
import callImg from "../assets/callAssets/call-img.jpg"
import Musk from "../assets/callAssets/musk.jpg"
import gates from "../assets/callAssets/gates.jpg"
import micButton from "../assets/callAssets/micButton.png"
import speaker from "../assets/callAssets/speaker.png"
import callIcon from "../assets/callAssets/callIcon.png"
import offCamera from "../assets/callAssets/offCamera.png"
import endColumn from "../assets/callAssets/endColumn.png"
import addCircleIcon from "../assets/callAssets/addCircleIcon.png"
import settingIcon from "../assets/callAssets/settingIcon.png"
const Call = () => {
  const DataItems = [
    { id: 1, name: "Maduka", img: callImg },
    { id: 2, name: "Gates", img: gates},
    {id: 3, name: "Otedola" , img: otedollar },
    {id: 4, name: "Musk" , img: Musk },
    { id: 1, name: "Maduka", img: callImg },
    { id: 2, name: "Gates", img: gates },
    {id: 3, name: "Otedola" , img: otedollar },
    {id: 4, name: "Musk" , img: Musk },
  ];

  return (
    <div>
      <main className="main">
        {/* slide section */}
        <header className="slide">
          <nav className="nav">
            <img
              src={searchIcon}
              className="icon1"
            />

            <input type="text" placeholder="search friends" className="inp" />
          </nav>
          <div className="slideDetails">
            {DataItems.map((item) => (
              <SlideItem item={item} key={item.name} />
            ))}
          </div>
          <section className="btnSection">
          <button className="slideBtn"><img src={addCircleIcon}  alt="add friend" className="slidePhoto" />Add friend</button>
          <button className="friendRequestBtn">friend Request</button>
        <button className="slideBtn"><img src={settingIcon} className="slidePhoto" alt="setting" />setting</button>
          </section>
         
        </header>
        {/* chat section */}
        <header className="chat">
          <img
            src={callImg}
            alt="img"
          />
          <div className="square">
            <div className="circle"></div>
            <center>you</center>
          </div>
          <nav className="feature">
          
           <img src={speaker} alt="speaker" className="navIcon" />
        
           <img src={offCamera} alt="offCamera" className="navIcon" />
        
       
            <button ><img src={micButton} alt="mic button" className="micButton"/></button>
            <img src={callIcon} alt="callIcon" className="callIcon" /> 
         
          </nav>
        </header>
      </main>
    </div>
  );
};

// child component of slideDetails
function SlideItem({ item }) {
  return (
    <div className="slideItem">
      <img className="slideImg" src={item.img} alt="image" />
      <span>{item.name}</span>
      <img src={endColumn} alt="icon" className="slidecIcon" />
    </div>
  );
}

export default Call;
