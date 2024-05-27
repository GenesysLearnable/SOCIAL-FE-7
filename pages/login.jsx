import React, { useState } from 'react';
import { setCredentials } from '../src/features/auth/authSlice';
import { useLoginMutation } from '../src/features/auth/userApiSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Enter your details');
    } else {
      try {
        const res = await login({ email, password }).unwrap();

        dispatch(setCredentials({ ...res }));
        toast.success(`Welcome ${res.username}!`);
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Enter your email </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
          onChange={handleFormChange}
        />
        <label htmlFor='password'>Enter your password </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password'
          onChange={handleFormChange}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default login;
