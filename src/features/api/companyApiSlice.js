import { apiSlice } from "./apiSlice";

export const companyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //company
        //post the personal information of a company
        personalInformation: builder.mutation({
            query: ({ companyId, payload }) => ({
                url: `/company/companies/${companyId}`,
                method: 'PATCH',
                body: payload
            })
        }),
        //company
        //post the identification details of a company
        identificationDetails: builder.mutation({
            query: ({ companyId, payload }) => ({
                url: `/company/companies/${companyId}/identification`,
                method: 'PATCH',
                body: payload
            })
        })
    })
})


export const { usePersonalInformationMutation, useIdentificationDetailsMutation } = companyApiSlice