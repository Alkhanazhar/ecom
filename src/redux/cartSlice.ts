import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ACTION } from "next/dist/client/components/app-router-headers";



const initialState: Array<any> = []
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        },
        removeFromCart: (state, action:PayloadAction<number>) => {
            const id=action.payload;
            return state.filter((item) =>item.id === id);
        }
    },
});
export const {addToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
