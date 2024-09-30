import { apislice } from "./apislice"



const vendorslice = apislice.injectEndpoints({
    
    endpoints: (builder) => ({
      vendoradd: builder.mutation({
            query: (body) => ({
                url: '/vendor/create',
                method: 'POST',
                body
            }),
        invalidatesTags:["VendorAdd"]
        }),
        getAllVendor: builder.query({
            query: (body) => ({
                url: '/vendor/getAllVendors',
                method: "GET",
                body
            }),
         providesTags:["VendorAdd","vendoreEdit"]
        }),
        // deleteCustomer: builder.mutation({
        //     query: (id) => ({
        //         url: `/customer/delete/${id}`,
        //         method: "DELETE"
        //     }),
        //     invalidatesTags: ["delete"]
        // }),
        updateVendor: builder.mutation({
            query: ({ id, data }) => ({
                url: `/vendor/updateVendor/${id}`,
                method: "PUT",
                body: data
            }),
        invalidatesTags:["vendoreEdit","singlevendor"]
        }),
        VendorGetById: builder.query({
            query: (id) => ({
                url: `/vendor/singleVendor/${id}`,
                method: "GET",

            }),
providesTags:["singlevendor"]
        }),




    })
    
})
export const {
    useVendoraddMutation,
    useGetAllVendorQuery,
    useUpdateVendorMutation,
    useVendorGetByIdQuery
} =  vendorslice