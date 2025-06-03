import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [searchQuary, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (!searchQuary) return;
    else {
      navigate(`/order/${searchQuary}`);
    }
  }
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        value={searchQuary}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for pizza or drinks..."
        className="w-full px-4 py-2 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    </form>
  );
}
