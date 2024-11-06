import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./AllSlices/CartSlice"; // Import the reducer correctly

export const store = configureStore({
    reducer: {
        cartslice: cartReducer // Use the reducer directly
    }
});
