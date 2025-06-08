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
// get data from id,for search
export async function getOrderById(itemId) {
  const response = await fetch(`${API_URL}/order/${itemId}`);
  if (!response.ok) {
    throw new Response("Order not found", { status: 404 });
  }
  const { data } = await response.json();
  return data;
}
// send data  to api (for create new order)
export async function sendData(newOrder) {
  try {
    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) {
      throw Error("Can not createe your order");
    }
    const data = await response.json(); // 👈 بدنه‌ی پاسخ رو اینجوری می‌گیری
    console.log(data);
  } catch (e) {
    throw Error(e.message || "can not create your order");
  }
}
