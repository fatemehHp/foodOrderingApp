import React from "react";
import { useLoaderData } from "react-router-dom";
import { getOrderById } from "../../services/resturantApi";

export default function Order() {
  const {
    customer,
    phone = "Not provided",
    address = "Not provided",
    position = "Not provided",
    priority,
    estimatedDelivery,
    orderPrice,
    priorityPrice,
    cart = [],
    status,
  } = useLoaderData();

  const formattedDelivery = new Date(estimatedDelivery).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-purple-100">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
          Order Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700 text-[15px] leading-6">
          <p>
            <span className="font-semibold text-purple-600">Customer:</span>{" "}
            {customer}
          </p>
          <p>
            <span className="font-semibold text-purple-600">Phone:</span>{" "}
            {phone}
          </p>
          <p>
            <span className="font-semibold text-purple-600">Address:</span>{" "}
            {address}
          </p>
          <p>
            <span className="font-semibold text-purple-600">Position:</span>{" "}
            {position}
          </p>
          <p>
            <span className="font-semibold text-purple-600">Priority:</span>{" "}
            {priority ? (
              <span className="text-red-500 font-bold">Yes</span>
            ) : (
              <span className="text-green-600 font-semibold">No</span>
            )}
          </p>
          <p>
            <span className="font-semibold text-purple-600">
              Estimated Delivery:
            </span>{" "}
            {formattedDelivery}
          </p>
          <p>
            <span className="font-semibold text-purple-600">Order Price:</span>{" "}
            ${orderPrice + (priority ? priorityPrice : 0)}
          </p>
          <p>
            <span className="font-semibold text-purple-600">Status:</span>{" "}
            <span
              className={`inline-block px-2 py-1 text-sm rounded-full ${
                status === "delivered"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {status}
            </span>
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Cart Items
          </h3>
          <ul className="space-y-2 list-inside">
            {cart.map((item, index) => (
              <li
                key={index}
                className="bg-purple-50 px-4 py-2 rounded-md shadow-sm text-gray-700 border border-purple-100"
              >
                🍕 {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getOrderDetailById({ params }) {
  const { id } = params;
  const orderData = await getOrderById(id);
  return orderData;
}
