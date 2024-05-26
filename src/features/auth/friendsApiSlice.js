import { apiSlice } from './apiSlice';
const FRIENDS_URL = 'api/friends';

export const friendsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFriend: builder.mutation({
      query: (data) => ({
        url: `${FRIENDS_URL}/add`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    updateFriendsRequest: builder.mutation({
      query: (data) => ({
        url: `${FRIENDS_URL}`,
        method: 'PUT',
        body: data,
        credentials: 'include',
      }),
    }),

    getFriend: builder.query({
      query: () => ({
        url: `${FRIENDS_URL}`,
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useAddFriendMutation,
  useUpdateFriendsRequestMutation,
  useGetFriendQuery,
} = friendsApiSlice;
