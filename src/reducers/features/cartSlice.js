// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const initialState = {
  cart: [],
  items: "",
  totalQuantity: 0,
  totalPrice: 0,
  itemsLoading: false,
  itemsError: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existingItem = state.cart.find((item) => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          action.payload.quantity = 1; // Initialize quantity for the new item
          state.cart.push(action.payload);
        }
        state.totalQuantity += 1; // Increment total quantity
      }
      ,
    getCartTotal: (state) => {
      const { totalPrice, totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          cartTotal.totalPrice += price * quantity;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );

      state.totalPrice = totalPrice.toFixed(2);
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cart.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
