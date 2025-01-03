import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apislice = createApi({
  reducerPath: "apislice",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://wdql6t7t-1000.inc1.devtunnels.ms"
    baseUrl: "https://v8z76x8n-1000.inc1.devtunnels.ms",
  }),
  endpoints: () => ({}),
  tagTypes: [
    "customer",
    "product",
    "delete",
    "edit",
    "single",
    "categoryDelte",
    "categoryadd",
    "editcategory",
    "singleCategory",
    "VendorAdd",
    "vendoreEdit",
    "singlevendor",
    "ProductEdit",
    "singleProduct",
  ],
});
