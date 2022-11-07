import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Records, CompleteRecord } from "./types";

const API_TOKEN = "956e41aa";
// Define a service using a base URL and expected endpoints
export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    GetRecordsBySearch: builder.query<Records, string>({
      query: (name) => `?s=${name}&apikey=${API_TOKEN}`,
    }),
    GetRecordById: builder.query<CompleteRecord, string>({
      query: (id) => `?i=${id}&apikey=${API_TOKEN}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecordsBySearchQuery, useGetRecordByIdQuery } = omdbApi;
