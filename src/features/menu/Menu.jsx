import React from "react";
import { fetchMenuData } from "../../services/resturantApi";
import { useLoaderData } from "react-router-dom";
import MenuItems from "./MenuItems";

const Menu = () => {
  const menuItems = useLoaderData();

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-200 py-16 px-6 sm:px-12">
      <div className=" mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-16 drop-shadow-lg">
          🍕 Our Pizza Menu
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item) => (
            <MenuItems item={item} key={item.id || item.pizzaId} />
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
