import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLogin } from '../slice/authSlice';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:8000/api/v1/'
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',

    // setting bearer token
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        console.log('while preparing headers', token)
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryWithAutoRefresh = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 403) {
        const refreshResult = await baseQuery('/user/refresh', api, extraOptions)
        console.log('rfresh datra', refreshResult)

        if (refreshResult.data) {
            console.log('refresh result', refreshResult)
            api.dispatch(setLogin({ accessToken: refreshResult.data }))
            result = await baseQuery(args, api, extraOptions)
        }
        else {
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired. "
            }
            return refreshResult
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithAutoRefresh,
    endpoints: (builder) => ({})
})