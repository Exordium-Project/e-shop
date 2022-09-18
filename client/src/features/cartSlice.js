import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productCartList: [],
        totalProducts: 0
    },
    reducers: {
        productAdded(state, action) {
            const newProduct = action.payload;
            const existingCartProduct = state.productCartList.find((item) => item.id == newProduct.id);

            if (existingCartProduct) {
                existingCartProduct.quantity++;
                state.totalProducts++;
            } else {
                state.productCartList.push(action.payload);
                state.totalProducts++;
            }
        },
        clothingProductAdded(state, action) {
            const newProduct = action.payload;
            const existingCartProduct = state.productCartList.find((item) => item.id == newProduct.id);

            if (existingCartProduct) {
                existingCartProduct.quantity++;
                state.totalProducts++;
            } else {
                state.productCartList.push(action.payload);
                state.totalProducts++;
            }
        }
    }
})

export const { productAdded, clothingProductAdded } = cartSlice.actions

export default cartSlice.reducer