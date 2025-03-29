import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import feedReducer from "./feedSlice"
import loginReducer from "./loginSlice"

const appStore = configureStore({
    reducer:{
            user: userReducer,
            feed: feedReducer,
            login: loginReducer,
    }
});

export default appStore;