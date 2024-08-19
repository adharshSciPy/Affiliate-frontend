import { apiSlice } from "./apiSlice";

export const serviceApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        //services
        //post the service using company Id
        postService: builder.mutation({
            query: ({ companyId, payload }) => ({
                url: `service/services${companyId}`,
                method: 'POST',
                body: payload
            })
        })

    })
})

export const {
    usePostServiceMutation
} = serviceApiSlice;