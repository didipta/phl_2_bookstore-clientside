import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bookstore-snowy.vercel.app/api/v1',
        prepareHeaders: (headers, { getState }) => {
            // Modify the headers as needed
            const token = localStorage.getItem('accessToken')
            if (token) {
                headers.set('Authorization', `${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Books'],
    endpoints: () => ({}),
})
