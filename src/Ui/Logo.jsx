import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="text-orange-600 text-2xl font-bold">
      <Link to="/"> 🍕 PizzaTime</Link>
    </div>
  );
}
