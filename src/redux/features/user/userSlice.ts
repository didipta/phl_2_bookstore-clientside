/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type IRole = 'user' | 'admin'

interface IUser {
    _id: string
    phoneNumber: string
    role: IRole
    password: string
    Name: string
    address: string
    email: string
}

interface Isetresult {
    user: IUser
    accessToken: string
}

export interface Iuserstate {
    currentUser: Isetresult | null
}

const initialState: Iuserstate = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state:any, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload
        },
        removeuse: (state) => {
            state.currentUser = null
        },
    },
})

export const { setCurrentUser, removeuse } = userSlice.actions

export default userSlice.reducer
