import React from "react";

const Button = ({ children = "Order Now", onClick }) => {
  const order =
    "bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300";
  return (
    <button onClick={onClick} className={`m-auto ${order}`}>
      {children}
    </button>
  );
};

export default Button;
