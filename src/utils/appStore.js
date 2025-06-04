import { configureStore } from "@reduxjs/toolkit";
import cartReduceer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReduceer,
    },
});

export default appStore;