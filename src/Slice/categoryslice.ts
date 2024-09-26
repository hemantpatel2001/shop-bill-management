import { apislice } from "./apislice"



const categoryslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        categoryAdd: builder.mutation({
            query: (body) => ({
                url: '/category/addCategory',
                method: 'POST',
                body
            }),
            invalidatesTags: ["categoryadd"]
        }),
        categoryGet: builder.query({
            query: (body) => ({
                url: '/category/getAllCategory',
                method: "GET",
                body
            }),
            providesTags: ["categoryadd", "categoryDelte", "categoryadd","singleCategory"]
        }),
        categoryDelete: builder.mutation({
            query: (id) => ({
                url: `/category/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["categoryDelte"]
        }),
        updatecategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/category/update/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["editcategory", "singleCategory"]
        }),
        categoryGetById: builder.query({
            query: (id) => ({
                url: `/category/getSingleById/${id}`,
                method: "GET",

            }),
            providesTags: ["singleCategory"]
        }),




    })
})
export const {
    useCategoryAddMutation,
    useCategoryGetQuery,
    useCategoryDeleteMutation,
    useUpdatecategoryMutation,
    useCategoryGetByIdQuery

} = categoryslice
