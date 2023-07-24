import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slice/sliderSlice";
import productReducer from "./slice/productSlice"
import cartReducer from "./slice/cartSlice"
import authReducer from "./slice/authSlice"
export const store = configureStore({
    reducer:{
        slider: slideReducer,
        product: productReducer,
        cart: cartReducer,
        user: authReducer,
    }
})