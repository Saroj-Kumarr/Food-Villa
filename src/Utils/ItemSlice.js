import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.unshift(action.payload);
    },
    deleteToCart: (state, action) => {
      const filterItems = state.cartItems.filter((item) => {
        return item.card.info.id != action.payload.card.info.id;
      });

      state.cartItems = [];
      state.cartItems = [...filterItems];
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, deleteToCart, clearCart } = itemSlice.actions;

export default itemSlice.reducer;
