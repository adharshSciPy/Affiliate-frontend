import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        // get all verified companies
        verifiedCompanies: builder.query({
            query: ({ page, limit }) => ({
                url: `/company/companies?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // get all not verified companies
        newCompanies: builder.query({
            query: ({ page, limit }) => ({
                url: `/company/companies/not-verified?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        verifyNewCompany: builder.mutation({
            query: ({ companyId }) => ({
                url: `/company/companies/${companyId}/verify`,
                method: 'PATCH'
            })
        })

    })
})

export const { useVerifiedCompaniesQuery, useNewCompaniesQuery, useVerifyNewCompanyMutation } = adminApiSlice