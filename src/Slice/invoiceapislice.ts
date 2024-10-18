import { apislice } from "./apislice"



const invoiceapislice= apislice.injectEndpoints({
    endpoints: (builder) => ({
       InvoiceAdd: builder.mutation({
            query: (body) => ({
                url: '/invoice/create',
                method: 'POST',
                body
            }),
    
        }),
        // categoryGet: builder.query({
        //     query: (body) => ({
        //         url: '/category/getAllCategory',
        //         method: "GET",
        //         body
        //     }),
        //     providesTags: ["categoryadd", "categoryDelte", "categoryadd","singleCategory"]
        // }),
        // categoryDelete: builder.mutation({
        //     query: (id) => ({
        //         url: `/category/delete/${id}`,
        //         method: "DELETE"
        //     }),
        //     invalidatesTags: ["categoryDelte"]
        // }),
        // updatecategory: builder.mutation({
        //     query: ({ id, data }) => ({
        //         url: `/category/update/${id}`,
        //         method: "PATCH",
        //         body: data
        //     }),
        //     invalidatesTags: ["editcategory", "singleCategory"]
        // }),
        // categoryGetById: builder.query({
        //     query: (id) => ({
        //         url: `/category/getSingleById/${id}`,
        //         method: "GET",

        //     }),
        //     providesTags: ["singleCategory"]
        // }),




    })
})
export const {useInvoiceAddMutation} = invoiceapislice