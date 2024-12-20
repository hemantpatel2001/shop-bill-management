import { apislice } from "./apislice"

interface Category {
    id: string;
    name: string;
  }
  
  

const categoryslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        categoryAdd: builder.mutation({
            query: (body) => ({
                url: '/category/add-category',
                method: 'POST',
                body
            }),
            invalidatesTags: ["categoryadd"]
        }),
        categoryGet: builder.query<Category[],void>({
            query: (body) => ({
                url: '/category/get-all-category',
                method: "GET",
                body
            }),
            providesTags: ["categoryadd", "categoryDelte", "categoryadd","singleCategory"]
        }),
        categoryDelete: builder.mutation({
            query: (id) => ({
                url: `/category/delete-category/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["categoryDelte"]
        }),
        updatecategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/category/update-category/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["editcategory", "singleCategory"]
        }),
        categoryGetById: builder.query({
            query: (id) => ({
                url: `/category/get-category-by-id/${id}`,
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
