import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:5000/',
  baseUrl: 'https://seeme-nga3.onrender.com/',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'FriendRequest'],
  endpoints: (builder) => ({}),
});
