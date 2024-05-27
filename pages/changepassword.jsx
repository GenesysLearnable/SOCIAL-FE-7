import React, { useState, useEffect } from "react";
import styles from "../styles/changepassword.module.css";
import Particle from "../components/design";
import { useSelector, useDispatch } from "react-redux";
import { useProfileMutation } from "@/src/features/auth/userApiSlice.js";
import { useRouter } from "next/router";
import Loader from "@/components/Loader.jsx";
import { logout, setCredentials } from "@/src/features/auth/authSlice.js";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useProfileMutation();
  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleChange2 = (e) => {
    setPassword2(e.target.value);
  };
  const confirmPassword = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password doesn't match");
      return
    }
    try {
      await updateProfile({
        email: user.email,
        password,
      }).unwrap();
      dispatch(logout());
      router.push("/auth");
      toast.success("Password has been changed");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className={styles["password-main-container"]} id="container">
        <Particle />
        <div className={styles["password-container"]}>
          <div className={styles["password-toggle-panel"]}>
            <div className={styles["write-up"]}>
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/Layer_3_og2nrm.svg"
                alt="Logo"
              />
              <h2>Chill, we've got you!</h2>
            </div>
            <div className={styles.image}>
              <img
                src="https://res.cloudinary.com/duz7maquu/image/upload/v1716030525/SeeMe/image4-removebg-preview_1_bkbo0e.png"
                alt="Decorative"
              />
            </div>
          </div>

          <div className={styles["password-form-container"]}>
            <form
              onSubmit={confirmPassword}
              className={styles["password-form-content"]}
            >
              <div className={styles["forget-text"]}>
                <h1>Change Password</h1>
              </div>

              <div className={styles["change-password-input"]}>
                <input
                  value={password}
                  onChange={handleChange}
                  type="password"
                  placeholder="New Password"
                  required
                />
                <input
                  value={password2}
                  onChange={handleChange2}
                  type="password"
                  placeholder="Confirm New Password"
                  required
                />
              </div>

              <button className={styles.submit} type="sunmit">
                {isLoading ? <Loader /> : "Submit"}
              </button>
              <button className={styles.cancel} type="button">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
