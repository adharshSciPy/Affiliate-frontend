import { apiSlice } from "./api";

export const authApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        // user auth endpoints
        userRegister: builder.mutation({
            query: ({ payload }) => ({
                url: `/user/register`,
                method: 'POST',
                body: payload
            })
        }),

        userLogin: builder.mutation({
            query: ({ payload }) => ({
                url: `/user/login`,
                method: 'POST',
                body: payload
            })
        }),

        // company auth endpoints
        companyRegister: builder.mutation({
            query: ({ payload }) => ({
                url: `/company/register`,
                method: 'POST',
                body: payload
            })
        }),

        companyLogin: builder.mutation({
            query: ({ payload }) => ({
                url: `/company/login`,
                method: 'POST',
                body: payload
            })
        }),

        // admin auth endpoints
        adminRegister: builder.mutation({
            query: ({ payload }) => ({
                url: `/admin/register`,
                method: 'POST',
                body: payload
            })
        }),

        adminLogin: builder.mutation({
            query: ({ payload }) => ({
                url: `/admin/login`,
                method: 'POST',
                body: payload
            })
        }),
    }),
})