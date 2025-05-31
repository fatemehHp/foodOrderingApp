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
      <main className=" mt-11 flex flex-col gap-7 py-4 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
