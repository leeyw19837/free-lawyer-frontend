import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store;