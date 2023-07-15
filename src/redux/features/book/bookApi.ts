/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice'

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getbook: builder.query({
            query: (data: number) => `/books?page=${data}`,
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

        getsinglebook: builder.query({
            query: (data: string) => `/books/${data}`,
        }),
    }),
})

export const { useGetbookQuery, useAddbookMutation, useNewbookQuery } = bookApi
