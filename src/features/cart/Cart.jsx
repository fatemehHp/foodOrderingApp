import { Link } from "react-router-dom";

const CartSummary = () => {
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
          🛒 Your Cart
        </h2>

        <ul className="divide-y divide-gray-200 border-y mb-6"></ul>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <Link
            to="/order/new"
            className="text-center bg-pink-600 hover:bg-pink-700 transition-colors text-white font-bold py-3 px-6 rounded-2xl shadow-md w-full"
          >
            🍕 Order pizzas
          </Link>

          <button className="text-center border border-pink-500 hover:bg-pink-100 text-pink-600 font-bold py-3 px-6 rounded-2xl shadow-sm w-full">
            🗑️ Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
