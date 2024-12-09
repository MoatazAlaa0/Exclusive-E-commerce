import { createSlice } from '@reduxjs/toolkit';

const initialValue = JSON.parse(localStorage.getItem("Wishlist")) || [];

const wishlistSlice = createSlice({
    name: "Wishlist",
    initialState: {
        wishlist: initialValue,
    },
    reducers: {
        addProduct(state, action) {
            const existingProduct = state.wishlist.find(pro => pro.id === action.payload.id);
        
            if (existingProduct) {
                state.wishlist = state.wishlist.filter(pro => pro.id !== action.payload.id);
                localStorage.setItem('Wishlist', JSON.stringify(state.wishlist));
                return; 
            } else {
                state.wishlist.push(action.payload);
                localStorage.setItem('Wishlist', JSON.stringify(state.wishlist));
                return; 
            }
        },
        removeProduct(state, action) {
            state.wishlist = state.wishlist.filter(pro => pro.id !== action.payload.id);
            localStorage.setItem('Wishlist', JSON.stringify(state.wishlist));
        },
        removeWishlist(state){
            state.wishlist = [];
            localStorage.setItem('Wishlist', JSON.stringify(state.wishlist));
        }
    }
});

export default wishlistSlice.reducer;
export const { addProduct, removeProduct ,removeWishlist} = wishlistSlice.actions;
