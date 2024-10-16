import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.products.find(product => product.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const findProduct = state.products.find(product => product.id === id);
      if (findProduct) {
        findProduct.quantity = quantity;
      }
      localStorage.setItem("products", JSON.stringify(state.products)); 
    },
    deleteFromCart: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
      localStorage.setItem("products", JSON.stringify(state.products)); 
    },
    clear: (state) => {
      state.products = [];
      localStorage.removeItem("products"); 
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
