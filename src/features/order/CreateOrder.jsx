import { Form } from "react-router-dom";
import { sendData } from "../../services/resturantApi";

const CreateOrder = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-100 to-yellow-50 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
          🍕 Create Your Pizza Order
        </h2>

        <Form method="post" className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="customer"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+1 234 567 890"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Delivery Address
            </label>
            <textarea
              name="address"
              rows="3"
              required
              placeholder="123 Pizza Street, Flavor Town"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="w-5 h-5 text-pink-600 focus:ring-pink-500"
            />
            <label
              htmlFor="priority"
              className="text-sm text-gray-700 font-medium"
            >
              Want to give your order priority?
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white font-bold py-3 px-6 rounded-2xl shadow-lg disabled:opacity-50"
          ></button>
        </Form>
      </div>
    </div>
  );
};
export default CreateOrder;
export async function sendDataToApi({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const newOrder = await sendData(data);
  console.log(newOrder);
}
