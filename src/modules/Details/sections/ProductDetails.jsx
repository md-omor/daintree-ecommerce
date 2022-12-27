import React from "react";
import { productDetails } from "../config/constants";
import FullDetails from "../partials/FullDetails";
import ProductSlider from "../partials/ProductSlider";

const ProductDetails = () => {
  return (
    <div className="md:container mx-auto flex md:flex-nowrap flex-wrap items-start justify-start pl-9 pr-8 w-full mt-[80px] -z-50">
      <ProductSlider />
      {productDetails?.map((data, index) => (
        <FullDetails {...data} key={index} />
      ))}
    </div>
  );
};

export default ProductDetails;
