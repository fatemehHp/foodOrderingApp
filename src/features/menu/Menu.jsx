import React from "react";
import { fetchMenuData } from "../../services/resturantApi";
import { useLoaderData } from "react-router-dom";
import MenuItems from "./MenuItems";
const Menu = () => {
  const menuItems = useLoaderData();
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          🍕 Our Pizza Menu
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item) => (
            <MenuItems item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

// loader function
export async function getMenuData() {
  const menuItems = await fetchMenuData();
  console.log(menuItems);
  return menuItems;
}
