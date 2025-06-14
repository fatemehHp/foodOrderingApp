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
        console.log("test");
        cartSlice.caseReducers.increaseItemQuantity(state, action);
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteToCart(state, action) {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    increaseItemQuantity(state, action) {
      const currentItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (currentItem) {
        currentItem.quantity += 1;
        currentItem.totalPrice = currentItem.unitPrice * currentItem.quantity;
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const { addToCart, deleteToCart, increaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
