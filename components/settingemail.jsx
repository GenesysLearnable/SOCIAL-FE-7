import React from "react";
import styles from "../styles/settingemail.module.css";

const SettingEmail = () => {
  const dataItems = [
    {
      name: "Change Email",
      text: "We’ll send a 6 digit OTP to your current email address.",
      value: "Enter OTP",
      otp: "Send OTP",
    },
    {
      name: "Change Password",
      text: "We’ll send a 6 digit OTP to your current email address.",
      value: "Enter OTP",
      otp: "Send OTP",
    },
  ];

  return (
    <div>
      {dataItems.map((data, index) => (
        <DataItem data={data} key={index} />
      ))}
      <main className={styles["main-section"]}>
        <img
          src="https://res.cloudinary.com/duz7maquu/image/upload/v1716313795/SeeMe/close-circle_ikskvj.jpg"
          alt="close"
          className={styles["closecircle-button"]}
        />

        <label className={styles["head-top"]}>Change Password</label>

        <input
          type="password"
          placeholder="New Password"
          className={`${styles.input} ${styles["section-input"]}`}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className={styles.input}
        />
        <br />
        <div className={styles["button-comp"]}>
          <button
            className={`${styles["submit-button"]} ${styles["section-btn"]}`}
          >
            Save
          </button>
        </div>
      </main>
    </div>
  );
};

export default SettingEmail;

function DataItem({ data }) {
  return (
    <div className={styles["main-section"]}>
      <img
        src="https://res.cloudinary.com/duz7maquu/image/upload/v1716313795/SeeMe/close-circle_ikskvj.jpg"
        alt="close"
        className={styles["closecircle-button"]}
      />

      <main className={styles.main}>
        <label className={styles["head-top"]}>{data.name}</label>
        <p className={styles.text}>{data.text}</p>
        <input type="text" placeholder={data.value} className={styles.input} />
        <span className={styles.otp}>{data.otp}</span>
        <section className={styles["button-comp"]}>
          <button type="button">Cancel</button>
          <button className={styles["submit-button"]} type="submit">
            Submit
          </button>
        </section>
      </main>
    </div>
  );
}
