import { apislice } from "./apislice"



const customerslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        customerAdd: builder.mutation({
            query: (body) => ({
                url: '/customer/register',
                method: 'POST',
                body
            }),
            invalidatesTags: ["customer"],

        }),
        customerGet: builder.query({
            query: (body) => ({
                url: '/customer/allCustomerDetails',
                method: "GET",
                body
            }),
            providesTags: ["customer", "delete", "edit"]
        }),
        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/customer/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["delete"]
        }),
        updatecustomer: builder.mutation({
            query: ({ id, data }) => ({
                url: `/customer/update/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["edit", "single"],
        }),
        customerGetById: builder.query({
            query: (id) => ({
                url: `/customer/singleCustomer/${id}`,
                method: "GET",

            }),
            providesTags: ["single"]
        }),




    })
})
export const {
    useCustomerAddMutation,
    useCustomerGetQuery,
    useDeleteCustomerMutation,
    useUpdatecustomerMutation,
    useCustomerGetByIdQuery

} = customerslice