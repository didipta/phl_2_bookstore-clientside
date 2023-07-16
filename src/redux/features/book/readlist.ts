/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// bookSlice.js
import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        markCurrentlyReading: (state, action) => {
            const { bookId } = action.payload
            const book = state.find((book) => book.id === bookId)
            if (book) {
                book.status = 'Currently Reading'
            }
        },
    },
})

export const { markCurrentlyReading } = bookSlice.actions
export default bookSlice.reducer
