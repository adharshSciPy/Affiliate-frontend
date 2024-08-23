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
        }),

        // edit the service details
        editService: builder.mutation({
            query: ({ serviceId, formData }) => ({
                url: `service/services/${serviceId}`,
                method: 'PATCH',
                body: formData
            })
        }),

        // get the service by id
        getServiceById: builder.query({
            query: ({ serviceId }) => ({
                url: `service/services/${serviceId}`,
                method: 'GET'
            })
        })
    })
})

export const {
    usePostServiceMutation,
    useServiceDetailsQuery,
    useEditServiceMutation,
    useGetServiceByIdQuery
} = serviceApiSlice;