import { useEffect, useRef, useState } from "react";
import { useCart } from "../../store/store";
import { Button } from "../genericComponents/Button";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const cart = useCart((state) => state.cart);
  console.log(cart, "d");
  const btnRef = useRef(null);
  useEffect(() => {
    gsap.set(btnRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  }, []);
  const onMouseEnter = () => {
    gsap.to(btnRef.current, {
      clipPath: "polygon(20% 0%, 82% 12%, 100% 85%, 0% 100%)",
    });
  };
  const onMouseLeave = () => {
    gsap.to(btnRef.current, {
      ease: "power2.out",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  };

  const { removeCartItem } = useCart();
  return (
    <div className="py-28 bg-yellow-300">
      <div className="max-w-screen-2xl mx-auto flex min-h-[500px] flex-col gap-10">
        <Link className="text-black flex gap-4 items-center" to="/">
          <FaArrowLeftLong /> Home
        </Link>
        <h1 className="text-2xl special-font hero-heading">
          Yo<b>ur</b> Ca<b>rt</b>
        </h1>
        <div className="flex flex-col max-w-2xl">
          {cart.length > 0 ? (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className=" py-2 flex gap-10 items-center justify-between"
                  >
                    <span className="font-robert-medium text-2xl">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="special-font">
                        ₹{item.price.toFixed(2)}
                      </span>
                      <button onClick={() => removeCartItem(item)}>
                        <FaTrash color="red" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <strong className="special-font">Total:</strong> ₹
                {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                <Button
                  title="Proceed to checkout"
                  link="/buy"
                  containerClass="flex justify-center gap-2 items-center bg-white text-black"
                  cusAudio="/audio/clickdbuy.mp3"
                  btnAudio={true}
                  onMouseEnter={onMouseEnter}
                  btnRef={btnRef}
                  onMouseLeave={onMouseLeave}
                ></Button>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
