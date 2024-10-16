import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cart-slice';
import { wishListReducer } from './slices/love-slice';

export const store = configureStore({
    reducer: {
        cart: cartReducer, 
        wishList: wishListReducer, 
    }
});
