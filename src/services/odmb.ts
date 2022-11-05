import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Records } from "./types";

const API_TOKEN = "956e41aa";
// Define a service using a base URL and expected endpoints
export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    GetRecordsByNameQuery: builder.query<Records, string>({
      query: (name) => `?s=${name}&apikey=${API_TOKEN}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecordsByNameQueryQuery } = omdbApi;
