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
        })

    })
})

export const {
    usePostServiceMutation
} = serviceApiSlice;