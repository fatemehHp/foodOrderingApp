import React from "react";

const UserName = () => {
  return (
    <div className="bg-orange-50 shadow-lg rounded-xl p-6 max-w-sm mx-auto  text-center border border-orange-100">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Welcome to PizzaTime!
      </h2>
      <input
        type="text"
        placeholder="Enter your username"
        className="w-full px-5 py-3 border border-orange-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder:text-orange-300 text-orange-700"
      />
    </div>
  );
};

export default UserName;
