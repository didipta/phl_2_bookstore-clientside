import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users/",
    }),
  }),
});

export const { useGetUserQuery } = productApi;
