import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Particle from "../components/design";
import styles from "../styles/addfriends.module.css";
import { useGetUsersQuery } from "@/src/features/auth/userApiSlice";
import Loader from "@/components/Loader";
import { useAddFriendMutation } from "@/src/features/auth/friendsApiSlice";
import { toast } from "react-toastify";

function AddFriends() {
  const router = useRouter();
  const [requestedUsers, setRequestedUsers] = useState([]);
  const [isAnyRequestSent, setIsAnyRequestSent] = useState(false);
  const [addFriend, { isLoading: loadingAddFriend, error: addFriendError }] =
    useAddFriendMutation();
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("requestedUsers")) || [];
    setRequestedUsers(savedRequests);
    setIsAnyRequestSent(savedRequests.length > 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("requestedUsers", JSON.stringify(requestedUsers));
    if (requestedUsers.length > 0) {
      setIsAnyRequestSent(true);
    }
  }, [requestedUsers]);

  const handleSkipButton = () => {
    router.push("/call");
  };

  const handleRequestBtn = async (id) => {
    try {
      await addFriend({ recipient: id }).unwrap();
      const updatedRequests = [...requestedUsers, id];
      setRequestedUsers(updatedRequests);
      toast.success("Request sent successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleContinue = (e) => {
    if (!isAnyRequestSent) {
      e.preventDefault();
    } else {
      handleSkipButton();
    }
  };

  const UserList = ({ users, requestedUsers, handleRequestBtn, styles }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    // Filter users based on the search query
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  return (
    <>
      <div className={styles["addFriends-Container"]}>
        <Particle />
        <div className={styles.containerAddfriend}>
          <div className={styles["parent-div2"]}>
            <h1>Add Friends</h1>
          </div>
          <div className={styles["parent-div"]}>
            <div className={styles.cally}>
              <h3 className={styles.header}>Suggested</h3>
              {isLoading && <Loader />}

              <>
                <div className={styles["add-search"]}>
                  <input
                    type="text"
                    // value={searchQuery}
                    // onChange={handleSearchChange}
                    placeholder="Search Friends"
                    className="search-bar"
                  />
                </div>
                {users &&
                  users.map((user) => (
                    <div key={user._id}>
                      <img
                        className={styles.userImg}
                        src={user.image?.url || user.image}
                        alt="Avatar"
                      />
                      {user.username}{" "}
                      <button
                        onClick={() => handleRequestBtn(user._id)}
                        disabled={requestedUsers.includes(user._id)}
                        style={
                          requestedUsers.includes(user._id)
                            ? {
                                backgroundColor: "rgba(8, 72, 125, 0.5)",
                                color: "white",
                              }
                            : {}
                        }
                      >
                        {requestedUsers.includes(user._id)
                          ? "Request Sent"
                          : "ADD"}
                      </button>
                    </div>
                  ))}
              </>
            </div>

            <div className={styles.addUserContainer}>
              <div className={styles.con1}>
                <h3>Add by Username or ID</h3>
                <label>
                  <input type="number" placeholder="" required />
                </label>
                <button onClick={handleContinue}>Add</button>
              </div>
              <div className={styles.con2}>
                <img src="https://res.cloudinary.com/duz7maquu/image/upload/v1716041164/SeeMe/Layer_2_rzzmxu.svg" />
              </div>

              <div className={styles.con3}>
                <a
                  href="#"
                  className={isAnyRequestSent ? styles.active : styles.inactive}
                  onClick={handleContinue}
                >
                  Continue
                </a>
                <button onClick={handleSkipButton}>Skip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFriends;
