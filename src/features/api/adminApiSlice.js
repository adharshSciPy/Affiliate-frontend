import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        // company
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

        // to block a company
        companyBlockManage: builder.mutation({
            query: ({ companyId, payload }) => ({
                url: `/company/companies/${companyId}/manage-block`,
                method: 'PATCH',
                body: payload
            })
        }),

        // to delete a company
        deleteCompany: builder.mutation({
            query: ({ companyId }) => ({
                url: `/company/companies/${companyId}`,
                method: 'DELETE'
            })
        }),

        // affiliaters
        // to verify a new affiliater
        verifyAffiliater: builder.mutation({
            query: ({ affiliaterId }) => ({
                url: `/user/affiliaters/${affiliaterId}/verify`,
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

        // to get defails of a user by id
        userDetailsById: builder.query({
            query: ({ userId }) => ({
                url: `/user/users/${userId}`,
                method: 'GET'
            })
        }),

        // customers
        //to get all customers
        customers: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/user/customers?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // tokens
        // get all tokens
        tokens: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/token/tokens?page=${page}&limit=${limit}`,
                method: 'GET'
            })
        }),

        // to generate a new token
        generateToken: builder.mutation({
            query: ({ payload, userId, adminId }) => ({
                url: `/token/tokens/${userId}/${adminId}`,
                method: 'POST',
                body: payload
            })
        }),
    })
})

export const {
    useVerifiedCompaniesQuery,
    useNewCompaniesQuery,
    useVerifyNewCompanyMutation,
    useVerifiedAffiliatersQuery,
    useNewAffiliatersQuery,
    useTokensQuery,
    useCustomersQuery,
    useDeleteCompanyMutation,
    useCompanyBlockManageMutation,
    useVerifyAffiliaterMutation,
    useGenerateTokenMutation,
    useUserDetailsByIdQuery
} = adminApiSlice