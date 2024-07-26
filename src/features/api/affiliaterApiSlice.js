import { apiSlice } from "./apiSlice";

export const affiliaterApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //affiliater
        //post the personal information of a affiliater
        affiliaterInformation: builder.mutation({
            query: ({ affiliaterId, payload }) => ({
                url: `/user/affiliaters/${affiliaterId}/personal-detials`,
                method: 'PATCH',
                body: payload
            })
        })
    })
})


export const { useAffiliaterInformationMutation } = affiliaterApiSlice