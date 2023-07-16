import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import Userslice from './features/user/Userslice'
import wishlist from './features/book/wishlist'

const store = configureStore({
    reducer: {
        currentuser: Userslice,
        [api.reducerPath]: api.reducer,
        wishlist: wishlist,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
