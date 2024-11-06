import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    carts: [],
    wishlist: []  // Added wishlist state
};

// cart and wishlist logic here

const cartSlice = createSlice({
    name: "Shopping",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.carts.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.carts[index].qty += 1;
            } else {
                const newItem = { ...action.payload, qty: 1 };
                state.carts.push(newItem);
            }
        },
        removeToCart: (state, action) => {
            const data = state.carts.filter((element) => element.id !== action.payload);
            state.carts = data;
        },
        // decrease quantity
        decreaseQuantity: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload);
            if (itemIndex !== -1 && state.carts[itemIndex].qty > 1) {
                state.carts[itemIndex].qty -= 1;
            } else {
                toast.success('Minimum one product is required');
            }
        }
    }
});

export const { addToCart, removeToCart, decreaseQuantity, emptyCart, addToWishlist, removeFromWishlist, clearWishlist } = cartSlice.actions;
export default cartSlice.reducer;
