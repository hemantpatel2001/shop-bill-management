import { ProductFormValues } from './../Screen/Product/Add/AddProductWrapper';
import { apislice } from "./apislice"



const customerslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        ProductAdd: builder.mutation({
            query: (body) => ({
                url: 'products/createProduct',
                method: 'POST',
                body
            }),
            invalidatesTags:["product"]
    
        }),
        productGet: builder.query<ProductFormValues[],void>({
            query: () => ({
                url: 'products/getAllProducts',
                method: "GET",
               
            }),
            providesTags:["product","ProductEdit"]
        }),
        updateproduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/update/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags:["ProductEdit","singleProduct"]
        }),
        productGetById: builder.query({
            query: (id) => ({
                url: `/products/singleproduct/${id}`,
                method: "GET",

            }),
     providesTags:["singleProduct"]
        }),

    

    })
})
export const {
useProductAddMutation,
useProductGetQuery,
useUpdateproductMutation,
useProductGetByIdQuery

} = customerslice