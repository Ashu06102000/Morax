import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { productsList } from "../../store/products";

export default function ScrollableCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const textListRef = useRef<HTMLDivElement>(null);
  const products = productsList;

  useEffect(() => {
    const handleScroll = () => {
      const list = textListRef.current;
      if (list) {
        const itemHeight = list.clientHeight / products.length;
        const newIndex = Math.min(
          Math.max(Math.floor(list.scrollTop / itemHeight), 0),
          products.length - 1
        );
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
          rotateCarousel(newIndex);
        }
      }
    };

    const list = textListRef.current;
    list?.addEventListener("scroll", handleScroll);
    return () => list?.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const rotateCarousel = (index: number) => {
    if (carouselRef.current) {
      const anglePerItem = 360 / products.length;
      const rotation = -anglePerItem * index;
      gsap.to(carouselRef.current, {
        rotationY: rotation,
        duration: 1,
        ease: "power3.inOut",
        rotate: "-10deg",
      });
    }
  };

  return (
    <div className="flex h-screen paroduct_carousel_calc_height">
      <div
        ref={textListRef}
        className="w-full h-full overflow-scroll flex flex-col items-start pt-64 pb-96 z-10"
      >
        {products.map((product, index) => (
          <div
            key={product.name}
            className={`text-[8rem] font-bold py-8 transition-colors duration-300 w-full special-font hero-heading   ${
              index === activeIndex ? "text-[#5542ff]" : "text-blue-75"
            }`}
          >
            {product.name}
          </div>
        ))}
      </div>

      <div
        className="w-3/4 flex items-center justify-center perspective-1000 absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={carouselRef}
          className="relative w-[30rem] h-96 gap-20 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(0deg)",
            transformOrigin: "center",
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.name}
              className="absolute w-10/12  h-[55vh] rounded-lg shadow-lg bg-gray-200 flex items-center justify-center"
              style={{
                transform: `rotateY(${
                  index * (360 / products.length)
                }deg) translateZ(250px)`,
                opacity: index === activeIndex ? 1 : 0.7,
                transition: "opacity 0.5s",
              }}
            >
              <video
                src={product.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}