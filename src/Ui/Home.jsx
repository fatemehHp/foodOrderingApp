import React from "react";
import UserName from "../features/user/UserName";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const userName = useSelector((state) => state.userReducer.userName);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-pink-600 tracking-tight">
          Welcome to 🍕 PizzaTime
        </h1>

        <p className="text-gray-600 text-md">
          Enter your name and get ready to build your delicious pizza order!
        </p>

        {userName === "" ? (
          <UserName />
        ) : (
          <Link to="/menu" className="block mt-2">
            <Button>contenu ordering {userName}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
