import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logout } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: "https://seeme-nga3.onrender.com/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'FriendRequest'],
  endpoints: (builder) => ({}),
});
