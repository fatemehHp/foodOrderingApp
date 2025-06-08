import React from "react";

const MenuItems = ({ item }) => {
  return (
    <div
      key={item.id}
      className={`bg-white cursor-pointer rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative transform hover:-translate-y-1 ${
        item.soldOut ? "opacity-60 grayscale" : "opacity-100"
      }`}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-52 object-cover rounded-t-3xl"
      />

      {item.soldOut && (
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none">
          Sold Out
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
          {item.name}
        </h3>

        <div className="text-right">
          {!item.soldOut ? (
            <span className="text-xl font-bold text-purple-700">
              ${item.unitPrice.toFixed(2)}
            </span>
          ) : (
            <span className="text-sm text-red-600 font-semibold tracking-wide">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
