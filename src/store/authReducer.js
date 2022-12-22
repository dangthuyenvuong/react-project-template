import { getUser } from "@/utils/token";
import { createSlice } from "@reduxjs/toolkit";

export const { reducer: authReducer, actions: authActions, getInitialState } = createSlice({
    initialState: {
        user: getUser()
    },
    name: 'auth',
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})