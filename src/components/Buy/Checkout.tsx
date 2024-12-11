import React, { useEffect, useRef, useState } from "react";
import { Link, useFetcher, useLocation } from "react-router-dom";
import { useAudioStore, useCart } from "../../store/store";
import { saveUserData } from "../../db/db";
import { useAuth0 } from "@auth0/auth0-react";

const CheckoutPage = () => {
  const { user } = useAuth0();
  const btnRef = useRef(null);
  const [purchaseDone, setPurchaseDone] = useState(false);
  const [createdOrderId, setOrderId] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };
  const { cart, clearCart } = useCart();
  const { audio }: any = useAudioStore();

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
    const purchaseHistory = {
      items: cart.map((item) => ({
        ...item,
        date: new Date().toISOString(),
        orderId,
      })),
      totalPurchase: parseFloat(total),
    };

    if (user) {
      try {
        await saveUserData(user?.sub ?? "", purchaseHistory);

        clearCart();
        setPurchaseDone(true);
        setOrderId(purchaseHistory.items[0].orderId);
      } catch (err) {
        console.error("Error saving user data:", err);
        alert("An error occurred while saving the purchase.");
      }
    } else {
      alert("User not authenticated!");
    }
  };
  const onClickedAudio = () => {
    if (audio) {
      const clickedAudio = new Audio("/audio/clickdbuy.mp3");
      clickedAudio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  };

  useEffect(() => {
    console.log("");
  }, [setPurchaseDone, user]);
  return (
    <div className="min-h-screen bg-black relative text-white flex items-center justify-center">
      <img src="/img/moraxLogo.png" alt="" />
      <div className="p-8  w-full max-w-lg">
        <h2 className="text-6xl font-bold mb-6 special-font uppercase">
          <b> Checkout</b>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            <div>
              <label
                className="block mb-2 font-semibold font-general text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded bg-black bg-opacity-50 focus:outline-none  text-white placeholder-gray-500 border-b border-gray-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                className="block mb-2 font-semibold font-general text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded bg-black bg-opacity-50 focus:outline-none  text-white placeholder-gray-500 border-b border-gray-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                className="block font-general mb-2 font-semibold text-gray-300"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded bg-black bg-opacity-50 focus:outline-none  text-white placeholder-gray-500 border-b border-gray-500"
                placeholder="Enter your address"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2 text-white font-general special-font">
              Order Summary
            </h3>
            <div className="flex-col flex gap-1">
              <div className="flex justify-between text-gray-300 font-general">
                <span>Total items:</span>
                <span>{cart?.length}</span>
              </div>
              <div className="flex justify-between font-bold text-white font-general">
                <span>Total:</span>
                <span>{total}</span>
              </div>
            </div>
          </div>

          <button
            ref={btnRef}
            onClick={onClickedAudio}
            type="submit"
            className="w-full py-2 mt-4 bg-white bg-opacity-90 text-black rounded hover:bg-blue-600 transition duration-200 uppercase"
          >
            Confirm Order
          </button>
        </form>
      </div>
      {purchaseDone && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 bg-yellow-300 p-8 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="flex flex-col gap-8">
              <h3 className="text-4xl font-bold mb-2 text-black font-general special-font">
                Order Confirmed
              </h3>
              <div className="flex-col flex gap-1">
                <div className="flex justify-between text-gray-300 font-general">
                  <span className="text-black font-semibold">Order ID:</span>
                  <span className="text-black">{createdOrderId}</span>
                </div>
              </div>
            </div>
            <Link
              ref={btnRef}
              onClick={onClickedAudio}
              className="w-full text-center py-2 mt-4 bg-white bg-opacity-90 border border-gray-800 text-black rounded transition duration-200 uppercase"
              to={`/`}
            >
              Go Back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
