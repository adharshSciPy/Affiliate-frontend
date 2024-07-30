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
        }),
        // patch the proof of address
        proofOfAddress: builder.mutation({
            query: ({ affiliaterId, payload }) => ({
                url: `/user/affiliaters/${affiliaterId}/proof-of-address`,
                method: 'PATCH',
                body: payload
            })
        }),
        // patch the domestic bank details
        domesticBankDetails: builder.mutation({
            query: ({ affiliaterId, payload }) => ({
                url: `/user/affiliaters/${affiliaterId}/bank-info-domestic`,
                method: 'PATCH',
                body: payload
            })
        }),
        // patch the international bank details
        internationalBankDetails: builder.mutation({
            query: ({ affiliaterId, payload }) => ({
                url: `/user/affiliaters/${affiliaterId}/bank-info-international`,
                method: 'PATCH',
                body: payload
            })
        })
    })
})


export const { useAffiliaterInformationMutation, useProofOfAddressMutation, useDomesticBankDetailsMutation, useInternationalBankDetailsMutation } = affiliaterApiSlice