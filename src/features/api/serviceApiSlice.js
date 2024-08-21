import { apiSlice } from "./apiSlice";

export const serviceApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        //services
        //post the service using company Id
        postService: builder.mutation({
            query: ({ companyId, formData }) => ({
                url: `service/services/${companyId}`,
                method: 'POST',
                body: formData
            })
        }),

        //get the service details
        serviceDetails: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `service/services?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        })

    })
})

export const {
    usePostServiceMutation,
    useServiceDetailsQuery
} = serviceApiSlice;