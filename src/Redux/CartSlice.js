import { createSlice } from "@reduxjs/toolkit";

const initialCartList = JSON.parse(localStorage.getItem('cartList')) || [];

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartItems: initialCartList,
    },
    reducers: {
        addProductToCart(state, action) {
            const existingProduct = state.cartItems.find(pro => pro.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
               
                
            } else {
                const newProduct = { ...action.payload, quantity: 1 };
                state.cartItems.push(newProduct);
            }
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
        },
        deleteProduct(state, action) {
            state.cartItems = state.cartItems.filter(pro => pro.id !== action.payload.id);
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
        },
        incrementQuantity(state, action) {
            const existingProduct = state.cartItems.find(pro => pro.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
        },
        decrementQuantity(state, action) {
            const existingProduct = state.cartItems.find(pro => pro.id === action.payload.id);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
            localStorage.setItem('cartList', JSON.stringify(state.cartItems));
        },
        removeCart(state) {
            state.cartItems = [];
            localStorage.removeItem('cartList');
        },
    },
});

export default CartSlice.reducer;
export const { addProductToCart, decrementQuantity, deleteProduct, incrementQuantity, removeCart } = CartSlice.actions;
