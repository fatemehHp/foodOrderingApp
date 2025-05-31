import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main */}
      <main className="bg-orange-50 mt-11 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
