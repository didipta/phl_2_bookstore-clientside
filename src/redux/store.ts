import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import Userslice from './features/user/Userslice'

const store = configureStore({
    reducer: {
        currentuser: Userslice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
