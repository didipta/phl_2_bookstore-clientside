/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state:any, action:any) => {
            state.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            const index = state.findIndex((item:any) => item.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
    },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
