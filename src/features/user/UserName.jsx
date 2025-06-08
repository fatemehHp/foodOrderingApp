import React from "react";

const UserName = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100 shadow-xl rounded-3xl p-8 max-w-md mx-auto text-center border border-pink-100">
      <h2 className="text-3xl font-extrabold text-pink-700 mb-6 tracking-wide">
        🍕 Welcome to PizzaTime!
      </h2>
      <input
        type="text"
        placeholder="What's your name?"
        className="w-full px-6 py-3 border border-pink-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all placeholder:text-pink-300 text-pink-700 font-medium shadow-inner"
      />
    </div>
  );
};

export default UserName;
