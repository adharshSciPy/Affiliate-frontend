import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        // get all verified companies
        verifiedCompanies: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/company/companies?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // get all not verified companies
        newCompanies: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/company/companies/not-verified?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // to verify a new company
        verifyNewCompany: builder.mutation({
            query: ({ companyId }) => ({
                url: `/company/companies/${companyId}/verify`,
                method: 'PATCH'
            })
        }),

        // get all verified affiliaters
        verifiedAffiliaters: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/user/affiliaters?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // get all not-verified affiliaters
        newAffiliaters: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/user/affiliaters/not-verified?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // get all tokens
        customers: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/user/customers?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // get all tokens
        tokens: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/token/tokens?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

    })
})

export const { useVerifiedCompaniesQuery, useNewCompaniesQuery, useVerifyNewCompanyMutation, useVerifiedAffiliatersQuery, useNewAffiliatersQuery, useTokensQuery, useCustomersQuery } = adminApiSlice