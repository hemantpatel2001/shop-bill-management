import { apislice } from "./apislice"



const customerslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        ProductAdd: builder.mutation({
            query: (body) => ({
                url: 'product/create',
                method: 'POST',
                body
            }),
            invalidatesTags:["product"]
    
        }),
        productGet: builder.query({
            query: (body) => ({
                url: 'product/getAllProducts',
                method: "GET",
                body
            }),
            providesTags:["product"]
        })


    })
})
export const {
useProductAddMutation,
useProductGetQuery

} = customerslice