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
        })
    })
})


export const { usePersonalInformationMutation } = companyApiSlice