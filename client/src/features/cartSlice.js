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
        productRemoved(state,action) {
            const newProduct = action.payload;
            const existingCartProduct = state.productCartList.find((item) => item.id == newProduct.id);

            if (existingCartProduct && existingCartProduct.quantity>1) {
                existingCartProduct.quantity--;
                state.totalProducts--;
            } else {
                console.log('quantity is one - removing product from state');
                const existingCartProductIndex = state.productCartList.findIndex((item) => (item.id == newProduct.id));
                state.productCartList.splice(existingCartProductIndex, 1);
                state.totalProducts--;
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
        },
        clothingProductRemoved(state,action) {
            const newProduct = action.payload;
            const existingCartProduct = state.productCartList.find((item) => (item.id == newProduct.id && item.size == newProduct.size));

            if (existingCartProduct && existingCartProduct.quantity>1) {
                console.log('quantity is more than 1', existingCartProduct);
                existingCartProduct.quantity--;
                state.totalProducts--;
            } else {
                console.log('quantity is one - removing product from state');
                const existingCartProductIndex = state.productCartList.findIndex((item) => (item.id == newProduct.id && item.size == newProduct.size));
                state.productCartList.splice(existingCartProductIndex,1);
                state.totalProducts--;
            }
        },
        updateSizeClothingProduct(state, action) {
            const productToChangeSize = action.payload;
            const existingCartProduct = state.productCartList.find((item) => (item.id == productToChangeSize.id && item.oldSize == productToChangeSize.size));

            if(existingCartProduct){
                console.log('Product with same size found');
                existingCartProduct.size = productToChangeSize.newSize;
                console.log(`changing size from ${productToChangeSize.oldSize} to ${productToChangeSize.newSize}`);
            } else {
                console.log('Product with same size not found');
            }
            

        }
    }
})

export const { productAdded, productRemoved, clothingProductAdded, clothingProductRemoved, updateSizeClothingProduct } = cartSlice.actions

export default cartSlice.reducer