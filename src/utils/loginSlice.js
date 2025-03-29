import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: false,
    reducers: {
        isLogin: (state, action) => {
            return action.payload;
        },
    }
})

export const {isLogin} = loginSlice.actions;
export default loginSlice.reducer;