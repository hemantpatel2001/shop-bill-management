
import { apislice } from "./apislice";

const authslice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body
            })
        })

    })
})
export const {
 useLoginMutation
} = authslice