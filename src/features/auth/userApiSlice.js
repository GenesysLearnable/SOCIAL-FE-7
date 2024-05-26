import { apiSlice } from './apiSlice';
const USERS_URL = 'api/users';


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
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
        credentials: 'include',
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),

    logout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/resetPassword`,
        method: 'POST',
        body:data
      }),
    }),
    
    validateOTP: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/resetPassword`,
        method: 'PUT',
        body: data,
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
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useLogoutMutation,
  useProfileMutation,
  useForgetPasswordMutation,
  useValidateOTPMutation
} = usersApiSlice;
