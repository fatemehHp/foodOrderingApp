import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/order/${searchQuery.trim()}`);
    setSearchQuery(""); // برای پاک کردن ورودی بعد از جستجو
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition w-full max-w-xs"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search your order..."
        className="flex-grow bg-transparent focus:outline-none text-orange-700 placeholder:text-orange-300"
      />
    </form>
  );
}
