import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../store/store";

const CheckoutPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const gameName = searchParams.get("name") || "Unknown Game";
  const price = parseFloat(searchParams.get("price") || "0");
  const [quantity, setQuantity] = useState(1);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const total = (price * quantity).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Order Confirmed!\n\nName: ${userDetails.name}\nEmail: ${userDetails.email}\nAddress: ${userDetails.address}\nGame: ${gameName}\nQuantity: ${quantity}\nTotal: $${total}`
    );
  };

  const { cart } = useCart();
  console.log(cart, "cart");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Order Summary</h3>
            <div className="flex justify-between">
              <span>Total items:</span>
              <span>{cart?.length}</span>
            </div>

            <div className="flex justify-between mt-4 font-bold">
              <span>Total:</span>
              <span>
                {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
