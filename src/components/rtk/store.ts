import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cart-slice'; // استيراد الـ cartReducer

export const store = configureStore({
    reducer: {
        cart: cartReducer, 
    }
});
