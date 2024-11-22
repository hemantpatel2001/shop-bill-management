import { apislice } from "./apislice";

const vendorslice = apislice.injectEndpoints({
  endpoints: (builder) => ({
    vendoradd: builder.mutation({
      query: (body) => ({
        url: "/vendorschemas/createVendor",
        method: "POST",
        body,
      }),
      invalidatesTags: ["VendorAdd"],
    }),
    getAllVendor: builder.query({
      query: (body) => ({
        url: "/vendorschemas/getAllVendors",
        method: "GET",
        body,
      }),
      providesTags: ["VendorAdd", "vendoreEdit"],
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
        url: `/vendorschemas/editVendor/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["vendoreEdit", "singlevendor"],
    }),
    VendorGetById: builder.query({
      query: (id) => ({
        url: `/vendorschemas/getSingleVendor/${id}`,
        method: "GET",
      }),
      providesTags: ["singlevendor"],
    }),
  }),
});
export const {
  useVendoraddMutation,
  useGetAllVendorQuery,
  useUpdateVendorMutation,
  useVendorGetByIdQuery,
} = vendorslice;
