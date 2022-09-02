import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  user: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      let newCart = [...state.items];

      if (index >= 0) newCart.splice(index, 1);
      state.items = newCart;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const selectItems = (state) => state.cart.items;
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, curr) => total + curr.price, 0);
export const selectUser = (state) => state.cart.user;

export default cartSlice.reducer;
export const { addToCart, removeFromCart, setUser } = cartSlice.actions;
