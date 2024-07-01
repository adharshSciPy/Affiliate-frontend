import { apiSlice } from "./apiSlice";
import { setLogin, setLogout } from "../slice/authSlice";

export const authApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        // user register
        userRegister: builder.mutation({
            query: ({ payload }) => ({
                url: `/user/register`,
                method: 'POST',
                body: payload
            })
        }),

        // user login
        userLogin: builder.mutation({
            query: ({ payload }) => ({
                url: `/user/login`,
                method: 'POST',
                body: payload
            })
        }),

        // company register
        companyRegister: builder.mutation({
            query: ({ payload }) => ({
                url: `/company/register`,
                method: 'POST',
                body: payload
            })
        }),

        // company login
        companyLogin: builder.mutation({
            query: ({ payload }) => ({
                url: `/company/login`,
                method: 'POST',
                body: payload
            })
        }),

        // admin register
        adminRegister: builder.mutation({
            query: ({ payload }) => ({
                url: `/admin/register`,
                method: 'POST',
                body: payload
            })
        }),

        // admin login
        adminLogin: builder.mutation({
            query: ({ payload }) => ({
                url: `/admin/login`,
                method: 'POST',
                body: payload
            })
        }),

        // auth refresh
        authRefresh: builder.mutation({
            query: () => ({
                url: `/user/refresh`,
                method: 'GET',

                async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled
                        dispatch(setLogin({ accessToken: data?.data }))
                        dispatch(apiSlice.util.resetApiState())
                    }
                    catch (err) {
                        throw err;
                    }
                }
            })
        }),

        // auth logout
        authLogout: builder.mutation({
            query: () => ({
                url: `/user/logout`,
                method: 'POST',
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(setLogout())
                    dispatch(apiSlice.util.resetApiState())
                }
                catch (err) {
                    throw err;
                }
            }
        }),
    }),
})

export const { useUserRegisterMutation, useUserLoginMutation, useAuthLogoutMutation, useCompanyRegisterMutation, useCompanyLoginMutation, useAdminRegisterMutation, useAdminLoginMutation, useAuthRefreshMutation } = authApiSlice