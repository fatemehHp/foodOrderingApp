import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Ui/Button";
import { deleteToCart } from "./cartSlice";
import { clearCart } from "./cartSlice";
import Quantity from "../../Ui/quantity";
const CartSummary = () => {
  const userName = useSelector((state) => state.userReducer.userName);

  const cartSlice = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();

  function deleteFromCartHandle(id) {
    dispatch(deleteToCart(id));
  }
  function clearAllCart() {
    dispatch(clearCart());
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-100 to-yellow-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl">
        <Link
          to="/menu"
          className="inline-block text-pink-600 hover:underline text-sm mb-4"
        >
          ← Back to menu
        </Link>

        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">
          {userName}'s Cart
        </h2>
        {cartSlice.length === 0 ? (
          <p className="text-xl font-semibold text-center text-pink-600 italic mt-4">
            Your cart is empty
          </p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 border-y mb-6">
              {cartSlice.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                  >
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
                      <Button
                        variant="delete"
                        onClick={() => deleteFromCartHandle(item.id)}
                      >
                        ❌ Remove
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <Link
                to="/order/new"
                className="text-center bg-pink-600 hover:bg-pink-700 transition-colors text-white font-bold py-3 px-6 rounded-2xl shadow-md w-full"
              >
                🍕 Order pizzas
              </Link>

              <Button variant="clearCart" onClick={clearAllCart}>
                🗑️ Clear cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
