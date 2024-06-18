import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    userId: '',
    role: '',
}

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = true
            state.userId = action.payload.userId
            state.role = action.payload.role
        },
        setLogout: (state) => {
            state.isLoggedIn = false
            state.userId = ''
            state.role = ''
        }
    }

})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer;