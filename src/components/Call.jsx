import React, { useState, useEffect } from "react";
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
import Particle from "./Motion";
import { connect, createLocalTracks } from "twilio-video";

const Call = () => {
  const [room, setRoom] = useState(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);

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

  useEffect(() => {
    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, [room]);

  const fetchToken = async (endpoint) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identity: "user" }),
    });
    const data = await response.json();
    return data.token;
  };

  const handleVideoCall = async () => {
    const token = await fetchToken("http://localhost:5500/video-token");

    const tracks = await createLocalTracks({
      audio: true,
      video: { width: 640 },
    });

    const room = await connect(token, {
      name: "my-room",
      tracks,
    });

    setRoom(room);

    room.on("participantConnected", (participant) => {
      participant.tracks.forEach((publication) => {
        if (publication.isSubscribed) {
          const track = publication.track;
          document.getElementById("remote-media-div").appendChild(track.attach());
        }
      });

      participant.on("trackSubscribed", (track) => {
        document.getElementById("remote-media-div").appendChild(track.attach());
      });
    });
  };

  const handleAudioCall = async () => {
    const token = await fetchToken("http://localhost:5500/audio-token");

    const tracks = await createLocalTracks({
      audio: true,
      video: false,
    });

    const room = await connect(token, {
      name: "my-room",
      tracks,
    });

    setRoom(room);

    room.on("participantConnected", (participant) => {
      participant.tracks.forEach((publication) => {
        if (publication.isSubscribed) {
          const track = publication.track;
          document.getElementById("remote-media-div").appendChild(track.attach());
        }
      });

      participant.on("trackSubscribed", (track) => {
        document.getElementById("remote-media-div").appendChild(track.attach());
      });
    });
  };

  const toggleAudio = () => {
    if (room) {
      room.localParticipant.audioTracks.forEach((publication) => {
        if (isAudioEnabled) {
          publication.track.disable();
        } else {
          publication.track.enable();
        }
      });
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const toggleVideo = () => {
    if (room) {
      room.localParticipant.videoTracks.forEach((publication) => {
        if (isVideoEnabled) {
          publication.track.disable();
        } else {
          publication.track.enable();
        }
      });
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

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
      <Particle />
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
          <div id="remote-media-div"></div>
          <img src={callImg} alt="Image" className="callImg" />
          <div className="square">
            <div className="circle"></div>
            <center>You</center>
          </div>
          <div className="feature">
            <img src={speaker} alt="Speaker" className="navIcon" onClick={handleAudioCall} />
            <img src={offCamera} alt="Off camera" className="navIcon" onClick={handleAudioCall } />
            <div>
              <img src={micButton} alt="Mic button" className="micButton" onClick={handleAudioCall} />
            </div>
            <img src={callIcon} alt="Call icon" className="callIcon" onClick={handleAudioCall } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
