const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// get data from api
export async function fetchMenuData() {
  const response = await fetch(`${API_URL}/menu`);
  if (!response.ok) {
    throw Error("something went wrong");
  }

  const { data } = await response.json();
  return data;
}
// get data from id
export async function getOrderById(itemId) {
  const response = await fetch(`${API_URL}/order/${itemId}`);
  if (!response.ok) {
    throw new Response("Order not found", { status: 404 });
  }
  const { data } = await response.json();
  return data;
}
