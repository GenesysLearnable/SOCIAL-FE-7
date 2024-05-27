import React, { useState } from "react";
import { setCredentials } from "../src/features/auth/authSlice";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../src/features/auth/userApiSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const register = () => {
  const [register, { loadingRegister }] = useRegisterMutation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ username, email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      toast.success(`Welcome ${res.username}!`);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          onChange={handleFormChange}
        />
        <label htmlFor="email">Enter your email </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleFormChange}
        />
        <label htmlFor="password">Enter your password </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleFormChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default register;
