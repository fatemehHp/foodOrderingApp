import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, onClick, type = "button", to }) => {
  const styles = `
    bg-gradient-to-r from-pink-400 to-orange-400 
    hover:from-pink-500 hover:to-orange-500
    text-white font-bold 
    px-6 py-3 
    rounded-full shadow-lg 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-pink-300
    w-full max-w-xs
    m-auto
  `;
  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`block ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
