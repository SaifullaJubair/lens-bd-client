import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // get all users
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),

    // register user
    saveUser: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),

    // login user
    getUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    // Get lenses
    getLenses: builder.query({
      query: () => ({
        url: "/lenses",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useSaveUserMutation,
  useGetUserMutation,
  useGetLensesQuery,
} = api;
