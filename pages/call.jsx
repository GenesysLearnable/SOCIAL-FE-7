import React, { useState } from "react";
import styles from "../styles/call.module.css";
import Particle from "../components/design";
import Settings from "@/components/setting";
import Router, { useRouter } from "next/router";
import WebRTCComponent from "@/components/WebRtcComponent";

const Call = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const router = useRouter();

  const handleAddFriend = () => {
    router.push("/addfriends");
  };
  const handleFriendRqt = () => {
    router.push("/updatefriends");
  };

  const handleStartVideo = () => {
    setIsVideoActive(true);
  };

  const handleEndVideo = () => {
    setIsVideoActive(false);
  };

  const DataItems = [
    {
      id: 1,
      name: "James",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716037111/SeeMe/Ellipse_6_mkpxi8.png",
    },
    {
      id: 2,
      name: "ChefChris",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716044353/SeeMe/Ellipse_1_epa3ew.png",
    },
    {
      id: 3,
      name: "DeeSylvia",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716044353/SeeMe/Ellipse_1_1_azlva2.png",
    },
    {
      id: 4,
      name: "Musk",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716048004/SeeMe/Musk_zffxmv.jpg",
    },
    {
      id: 5,
      name: "Maduka",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716048004/SeeMe/Maduka_e4yr38.jpg",
    },
    {
      id: 6,
      name: "Gates",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716048004/SeeMe/Gate_eq9eg9.jpg",
    },
    {
      id: 7,
      name: "Otedola",
      img: "https://res.cloudinary.com/duz7maquu/image/upload/v1716048004/SeeMe/Otedola_pheeb0.jpg",
    },
  ];

  const SlideItem = ({ item }) => {
    return (
      <div className={styles.slideItem}>
        <img className={styles.slideImg} src={item.img} alt="Image" />
        <span>{item.name}</span>
        <img
          src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044676/SeeMe/tabler_dots_slidy2.png"
          alt="Icon"
          className={styles.slidecIcon}
        />
      </div>
    );
  };

  return (
    <div className={styles["call-container"]}>
      <Particle />
      <div className={styles.settings}>
        <Settings />
      </div>
      <img
        src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/Layer_3_copy_h0nuqb.svg"
        alt="Logo"
        className={styles.logo}
      />
      <div className={styles["container-call"]}>
        {/* Slide section */}
        <div className={styles.slide}>
          <div className={styles.searchbar}>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044380/SeeMe/iconamoon_search-bold_htmrtx.svg"
              className={styles.icon1}
              alt="Search Icon"
            />
            <input
              type="text"
              placeholder="Search Friends"
              className={styles.inp}
            />
          </div>
          <div className={styles.slideDetails}>
            {DataItems.map((item) => (
              <SlideItem item={item} key={item.id} />
            ))}
          </div>
          <div className={styles.btnSection}>
            <button onClick={handleAddFriend} className={styles.slideBtn}>
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044353/SeeMe/add-circle_nqizel.svg"
                alt="Add friend"
                className={styles.slidePhoto}
              />
              Add friend
            </button>
            <button
              onClick={handleFriendRqt}
              className={styles.friendRequestBtn}
            >
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044649/SeeMe/profile-2user_wamym8.png"
                alt="Request"
              />
              Friend Request
            </button>
            <button className={styles.slideBtn}>
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044675/SeeMe/solar_settings-bold_nk8stl.png"
                alt="Setting"
                className={styles.slidePhoto}
              />
              Setting
            </button>
          </div>
        </div>

        {/* Chat section */}
        <div className={styles.chat}>
          <img
            src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044677/SeeMe/user-add_bmhnsr.png"
            alt="icon"
            className={styles.person}
          />
          <div className={styles.callImg}>
            {isVideoActive && <WebRTCComponent />}
          </div>
          <div className={styles.square}>
            <div className={styles.circle}></div>
            <p>You</p>
          </div>
          <div className={styles.feature}>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044381/SeeMe/octicon_unmute-16_wg2xcv.png"
              alt="Speaker"
              className={styles.navIcon}
              onClick={handleStartVideo}
            />
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044354/SeeMe/fluent_camera-off-16-filled_o8ykuc.png"
              alt="Off camera"
              className={styles.navIcon}
            />
            <div>
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044356/SeeMe/Frame_35_uexfcb.png"
                alt="Mic button"
                className={styles.micButton}
              />
            </div>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716044380/SeeMe/ion_call_do3u3t.png"
              alt="Call icon"
              className={styles.callIcon}
              onClick={handleEndVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
