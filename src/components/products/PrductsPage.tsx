import React from "react";
import ScrollableCarousel from "./ProductCarousel";

const PrductsPage = () => {
  return (
    <div id="product-page">
      <div className="pt-36 max-w-screen-2xl ml-auto mr-auto]">
        <p className="font-general text-sm uppercase md:text-[10px] text-white">
          Scroll to select
        </p>
        <ScrollableCarousel />
      </div>
    </div>
  );
};

export default PrductsPage;
