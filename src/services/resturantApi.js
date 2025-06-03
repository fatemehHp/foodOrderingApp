const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// get data from api
export async function fetchMenuData() {
  const response = await fetch(`${API_URL}/menممu`);
  if (!response.ok) {
    throw Error("something went wrong");
  }
  const { data } = await response.json();
  return data;
}
