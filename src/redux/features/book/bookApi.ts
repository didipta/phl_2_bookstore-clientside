/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice'
const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getbook: builder.query({
            query: (data: any) =>
                `/books?page=${data.page}&searchTerm=${data.search}${
                    data.genre !== '' ? `&Genre=${data.genre}` : ''
                }${
                    data.publication != ''
                        ? `&Publication_Date=${data.publication}`
                        : ''
                }`,
            providesTags: ['Books'],
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
            providesTags: ['Books'],
        }),

        setreview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/review/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Books'],
        }),

        updatebook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Books'],
        }),

        deletebook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
        }),
    }),
})

export const {
    useGetbookQuery,
    useAddbookMutation,
    useNewbookQuery,
    useGetsinglebookQuery,
    useSetreviewMutation,
    useUpdatebookMutation,
    useDeletebookMutation,
} = bookApi
