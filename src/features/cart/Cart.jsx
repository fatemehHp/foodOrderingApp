import { Link } from "react-router-dom";
import Button from "../../Ui/Button";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
const CartSummary = () => {
  const userName = useSelector((state) => state.userReducer.userName);
  const cartSlice = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();
  function clearAllCart() {
    dispatch(clearCart());
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-100 to-yellow-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-5xl">
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
                return <CartItem item={item} key={item.id} />;
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
