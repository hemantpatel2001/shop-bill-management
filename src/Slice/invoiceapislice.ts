import { apislice } from "./apislice"

interface Invoice {
    id: string;
    invoiceNo: string;
    date: string;
    totalAmount: number;
    paidAmount: number;
    customerId: {
      name: string;
    };
  }

const invoiceapislice= apislice.injectEndpoints({
    endpoints: (builder) => ({
       InvoiceAdd: builder.mutation({
            query: (body) => ({
                url: '/invoice/createInvoice',
                method: 'POST',
                body
            }),
    
        }),
        getAllInvoice: builder.query<Invoice[],void>({
            query: (body) => ({
                url: '/invoice/getAllInvoice',
                method: "GET",
                body
            }),
            providesTags: []
        }),
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
export const {useInvoiceAddMutation,useGetAllInvoiceQuery} = invoiceapislice