import {configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"
import wishlistReducer from './wishlistSlice.js';
export const store = configureStore({
    reducer:{
        CartSlice,
        wishlistReducer,
    }
})