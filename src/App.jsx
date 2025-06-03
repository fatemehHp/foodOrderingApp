import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order from "./features/order/Order";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./Ui/AppLayout";
import Home from "./Ui/Home";
import { getMenuData } from "./features/menu/Menu";
import Error from "./Ui/Error";
import { getOrderDetailById } from "./features/order/Order";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, // 🔧 این خط مهمه
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: getMenuData,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: getOrderDetailById,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
