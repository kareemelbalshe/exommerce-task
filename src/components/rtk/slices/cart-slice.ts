import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: {
    products: [],
  },
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct= state.products.find((product)=>product.id===action.payload.id)
      if(findProduct){
        findProduct.quantity = findProduct.quantity+1
      }
      else{
        state.products.push({...action.payload, quantity: 1});
      }
    },
    deleteFromCart: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      state.products=[];
    },
  },
});

export const cartReducer = cartSlice.reducer
export const cartAction = cartSlice.actions
