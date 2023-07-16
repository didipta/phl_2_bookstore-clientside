/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice'

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getbook: builder.query({
            query: (data:any) =>
                `/books?page=${data.page}&searchTerm=${data.search}`,
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
            providesTags: ['reviews'],
        }),

        setreview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/review/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['reviews'],
        }),
    }),
})

export const {
    useGetbookQuery,
    useAddbookMutation,
    useNewbookQuery,
    useGetsinglebookQuery,
    useSetreviewMutation,
} = bookApi
