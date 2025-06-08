import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 group">
      <span className="text-3xl">🍕</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 text-2xl font-extrabold tracking-wide group-hover:scale-105 transition-transform duration-300">
        PizzaTime
      </span>
    </Link>
  );
}
