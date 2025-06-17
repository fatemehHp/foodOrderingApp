import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.cart.some((item) => item.id === action.payload.id)) {
        cartSlice.caseReducers.increaseItemQuantity(state, action);
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteToCart(state, action) {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    increaseItemQuantity(state, action) {
      const currentItem = state.cart.find((item) => item.id === action.payload);
      if (currentItem) {
        currentItem.quantity += 1;
        currentItem.totalPrice = currentItem.unitPrice * currentItem.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const currentItem = state.cart.find((item) => item.id === action.payload);
      if (currentItem.quantity === 1) {
        return;
      } else if (currentItem) {
        currentItem.quantity -= 1;
        currentItem.totalPrice = currentItem.unitPrice * currentItem.quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export function getCurrentItem(state, id) {
  const currentItem = state.cart.find((item) => item.id === id);
  console.log(currentItem);
  return currentItem;
}
export const {
  addToCart,
  deleteToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
