import React from "react";
import { deleteToCart } from "./cartSlice";
import Quantity from "../../Ui/quantity";
import { useDispatch } from "react-redux";
import Button from "../../Ui/Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function deleteFromCartHandle(id) {
    dispatch(deleteToCart(id));
  }

  return (
    <li className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div>
        <span className="block text-pink-800 font-medium">
          {item.quantity} * {item.pizzaName}
        </span>
        <span className="text-gray-500 text-sm">
          total price: ${item.unitPrice * item.quantity}
        </span>
      </div>
      <Quantity quantity={item.quantity} id={item.id} />
      <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto">
        <span className="text-pink-700 font-semibold">
          unit price:{item.unitPrice}
        </span>
        <Button variant="delete" onClick={() => deleteFromCartHandle(item.id)}>
          ❌ Remove
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
