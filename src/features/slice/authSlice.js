import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null
}

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        setLogout: (state, action) => {
            state.token = null
        },
    }

})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer;