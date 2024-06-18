import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = 'http://localhost:8000'
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })

export const apiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({})
})