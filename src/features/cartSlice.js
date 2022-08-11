import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state, action.payload];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
