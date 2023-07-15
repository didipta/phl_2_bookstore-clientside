/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice'

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getbook: builder.query({
            query: () => '/books/',
        }),
        newbook: builder.query({
            query: () => '/books/get/new',
        }),
        addbook: builder.mutation({
            query: (data) => ({
                url: '/books/',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useGetbookQuery, useAddbookMutation, useNewbookQuery } = bookApi
