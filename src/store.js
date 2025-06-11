import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/cart";
const store = configureStore({
  reducer: {
    userReducer: userSlice,
    cartSlice: cartSlice,
  },
});
export default store;
