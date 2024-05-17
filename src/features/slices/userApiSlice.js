import { apiSlice } from './apiSlice';

const USERS_URL = '/api/users'
const GOOGL = '/auth/google'
const FRIENDURL = 'api/friends/add'
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    google: builder.query({
        query: () => ({
            url: GOOGL,
            credentials: 'include',
          }),
          providesTags: ['User'],
          keepUnusedDataFor: 5,
        }),
        friendRequest: builder.mutation({
            query: (data) => ({
              url: FRIENDURL,
              method: 'POST',
              body: data,
              credentials: 'include',
            }),
            invalidatesTags: ['FriendRequest'],
          }),
    
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
        credentials: 'include',
      }),
    }),

    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
        credentials: 'include',
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
        credentials: 'include',
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE',
        credentials: 'include',
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: 'PUT',
        body: data,
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
useGoogleQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
  useFriendRequestMutation,
} = usersApiSlice;