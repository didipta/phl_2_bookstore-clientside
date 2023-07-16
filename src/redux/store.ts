import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import Userslice from './features/user/Userslice'
import wishlist from './features/book/wishlist'
import readlist from './features/book/readlist'

const store = configureStore({
    reducer: {
        currentuser: Userslice,
        [api.reducerPath]: api.reducer,
        wishlist: wishlist,
        readlist: readlist,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
