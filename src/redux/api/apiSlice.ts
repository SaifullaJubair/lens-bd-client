import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Users", "Lenses"],
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

    // Lenses

    // Get lenses
    getLenses: builder.query({
      query: () => ({
        url: "/lenses",
        method: "GET",
      }),
      providesTags: ["Lenses"],
    }),
    getSingleLens: builder.query({
      query: (id) => ({
        url: `/lenses/${id}`,
        method: "GET",
      }),
    }),

    // add lens
    addLens: builder.mutation({
      query: (data) => ({
        url: "/add-lens",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Lenses"],
    }),

    // update lens
    updateLens: builder.mutation({
      query: ({ data, id }) => ({
        url: `/update-lens/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Lenses"],
    }),

    // delete lens

    deleteLens: builder.mutation({
      query: (id) => ({
        url: `/delete-lens/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lenses"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useSaveUserMutation,
  useGetUserMutation,
  useGetLensesQuery,
  useGetSingleLensQuery,
  useAddLensMutation,
} = api;
