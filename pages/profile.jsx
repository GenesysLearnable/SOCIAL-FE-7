import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Particle from "../components/design.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useProfileMutation } from "@/src/features/auth/userApiSlice.js";
import Loader from "@/components/Loader.jsx";
import { setCredentials } from "@/src/features/auth/authSlice.js";
import Resizer from "react-image-file-resizer";
import { CiEdit } from "react-icons/ci";

const ProfileSetup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const fileInputRef = useRef(null);

  const { userInfo } = useSelector((state) => state.auth);

  const [user, setUser] = useState(userInfo || {});
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    username: userInfo?.username || "",
  });
  const { username } = formData;

  const [updateProfile, { isLoading }] = useProfileMutation();

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        640,
        510,
        "JPEG",
        70,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const resizedImage = await resizeFile(file);
        setImage(resizedImage);
      } catch (error) {
        toast.error("Error resizing image");
        console.error("Error resizing image:", error);
      }
    }
  };

  const handleSave = async () => {
    try {
      const res = await updateProfile({
        username,
        image: image ? image : user.image,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles["profile-container"]}>
      <Particle />
      <div className={styles["profile-left-section"]}>
        <div className={styles["profile-left-section-wrapper"]}>
          <img
            src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/Layer_3_og2nrm.svg"
            className={styles["logo-two"]}
            alt="Logo"
          />
          <h1>Complete and connect!</h1>
          <div className={styles.images}>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/image1-removebg-preview_p69drm.png"
              alt="Welcome"
            />
          </div>
        </div>
      </div>

      <div className={styles["profile-right-section"]}>
        <div className={styles["fixed-width"]}>
          <div className={styles["profile-right-section-wrapper"]}>
            <div className={styles.text}>
              {/* {`Your User ID is ${user._id}`} */}
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716280091/SeeMe/gravity-ui_copy_zwtqor.svg"
                alt=""
                className={styles.copy}
              />
              <br />
              Friends can add you through this PIN
            </div>
            <h2 className={styles["setprofiles"]}>Set Up Profile</h2>
            <div className={styles["profile-image-wrapper"]}>
              <img
                // src={user.image ? user.image.url || user.image : ''}
                alt="Avatar"
              />
              <CiEdit className={styles.edit} onClick={handleIconClick} />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            <input
              className={styles.input}
              type="text"
              placeholder=""
              name="username"
              value={username || ""}
              onChange={handleFormChange}
            />
            <div className={styles["button-box"]}>
              <button onClick={handleSave} className={styles.button}>
                {isLoading ? <Loader /> : "Save"}
              </button>

              <button className={styles.button2}>
                {isLoading ? <Loader /> : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
