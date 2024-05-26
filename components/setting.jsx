import React from "react";
import styles from "../styles/setting.module.css";
import Particle from "@/components/design";
import SettingEmail from "./settingemail";

const Settings = () => {
  return (
    <>
      <div className={styles["settings-main-container"]}>
        <Particle />
        <div className={styles["settings-container"]}>
          <div className={styles["header-1"]}>
            <h1>Account</h1>
            <img
              src="https://res.cloudinary.com/duz7maquu/image/upload/v1716313795/SeeMe/close-circle_ikskvj.jpg"
              alt="icon"
            />
          </div>

          <div className={styles["settings-form-main-container"]}>
            <form className={styles["settings-form-container"]}>
              <div className={styles["profile-settings-container"]}>
                <div className={styles["profile-settings"]}>
                  <img
                    src="https://res.cloudinary.com/duz7maquu/image/upload/v1716037111/SeeMe/Ellipse_6_mkpxi8.png"
                    alt=""
                    className={styles["avatar"]}
                  />
                  <img
                    src="https://res.cloudinary.com/duz7maquu/image/upload/v1716280100/SeeMe/material-symbols_edit-sharp_reyx1y.svg"
                    alt=""
                    className={styles["icon"]}
                  />
                </div>
              </div>

              <div className={styles["container-main-input"]}>
                <div className={styles["container-input"]}>
                  <label htmlFor="name" className={styles["settings-username"]}>
                    Username
                  </label>
                  <p className={styles["settings-name"]}>John Doe</p>
                  <p className={styles["settings-change-username"]}>
                    <a href="">Change Username</a>
                  </p>
                </div>

                <div className={styles["container-input-2"]}>
                  <label htmlFor="email">Email</label>
                  <p>johndoe@gmail.com</p>
                  <p className={styles["settings-change-email"]}>
                    <a href="">Change Email</a>
                  </p>
                  <SettingEmail />
                </div>

                <div className={styles["container-input-3"]}>
                  <label htmlFor="password">Password</label>
                  <p className={styles["settings-password"]}>
                    <a href="">Change Password</a>
                  </p>
                </div>

                <div className={styles["container-input-4"]}>
                  <p>
                    <a href="">Upgrade to Premium</a>
                  </p>
                </div>

                <div className={styles["container-input-5"]}>
                  <p>
                    <a href="">Logout</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
