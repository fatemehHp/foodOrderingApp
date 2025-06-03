import React from "react";

const MenuItems = ({ item }) => {
  return (
    <div
      key={item.id}
      className={`bg-white cursor-pointer rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative ${
        item.soldOut ? "opacity-50 grayscale" : ""
      }`}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      {item.soldOut && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
          Sold Out
        </div>
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {item.name}
        </h3>

        <div className="text-right">
          {!item.soldOut ? (
            <span className="text-lg font-bold text-purple-600">
              ${item.unitPrice}
            </span>
          ) : (
            <span className="text-sm text-red-500 font-semibold">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
