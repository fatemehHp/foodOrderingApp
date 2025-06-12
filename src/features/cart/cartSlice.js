import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 12,
      pizzaName: "margarita",
      quantity: 1,
      unitPrice: 12,
      totalPrice: 12,
    },
  ],
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
      state.cart.push(action.payload);
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
      state.cart.push(action.payload);
    },
  },
});
export const { addToCart, deleteToCart, increaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
