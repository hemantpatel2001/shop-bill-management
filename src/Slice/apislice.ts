import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apislice = createApi({
    reducerPath: 'apislice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.1.9:1000'
    }),
    endpoints: (builder) => ({}),
    tagTypes:["customer" ,"product","delete","edit","single","categoryDelte" ,"categoryadd","editcategory","singleCategory"]
})
