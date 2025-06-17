import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentItem,
  increaseItemQuantity,
} from "../features/cart/cartSlice";
import { decreaseItemQuantity } from "../features/cart/cartSlice";
const Quantity = ({ id }) => {
  const quantity = useSelector((state) => getCurrentItem(state.cartSlice, id));
  const dispatch = useDispatch();

  // Increase
  function increaseQuantity(id) {
    dispatch(increaseItemQuantity(id));
  }
  // Decrease
  function decreaseQuantity(id) {
    dispatch(decreaseItemQuantity(id));
  }
  return (
    <div className="flex items-center gap-2 justify-center">
      <Button variant="quantity" onClick={() => decreaseQuantity(id)}>
        −
      </Button>
      <span className="min-w-[24px] text-center font-medium text-pink-800">
        {quantity.quantity}
      </span>
      <Button variant="quantity" onClick={() => increaseQuantity(id)}>
        +
      </Button>
    </div>
  );
};

export default Quantity;
