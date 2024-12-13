import React from "react";
import ScrollableCarousel from "./ProductCarousel";
import { constants } from "../../constants/constants";

const PrductsPage = () => {
  return (
    <div id="product-page">
      <div className="pt-36 max-w-screen-2xl ml-auto mr-auto">
        <p className="font-general text-sm uppercase md:text-[10px] text-white">
          {constants.SCROLL_TO_SELECT}
        </p>
        <ScrollableCarousel />
      </div>
    </div>
  );
};

export default PrductsPage;
