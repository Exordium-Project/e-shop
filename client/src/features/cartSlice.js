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
            const existingCartProduct = state.productCartList.find((item) => (item.id == newProduct.id && item.size==newProduct.size));

            if (existingCartProduct) {         
                    console.log('a product with the same size exists', existingCartProduct)          
                    existingCartProduct.quantity++;
                    state.totalProducts++;
                } else {
                console.log('adding a new product')
                state.productCartList.push(newProduct);
                state.totalProducts++;
            }
        }
    }
})

export const { productAdded, clothingProductAdded } = cartSlice.actions

export default cartSlice.reducer