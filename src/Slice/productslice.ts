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
            query: () => ({
                url: 'product/getAllProducts',
                method: "GET",
               
            }),
            providesTags:["product"]
        }),
        updateproduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/product/update/${id}`,
                method: "PUT",
                body: data
            }),
        }),
        productGetById: builder.query({
            query: (id) => ({
                url: `/product/singleproduct/${id}`,
                method: "GET",

            }),
          
        }),

    

    })
})
export const {
useProductAddMutation,
useProductGetQuery,
useUpdateproductMutation,
useProductGetByIdQuery

} = customerslice