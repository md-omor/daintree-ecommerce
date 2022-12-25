import React from "react";
import ProductSlider from "../partials/ProductSlider";

const ProductDetails = () => {
  return (
    <div className="md:container mx-auto flex md:flex-nowrap flex-wrap items-start justify-between pl-9 pr-8 w-full mt-[80px] -z-50">
      <ProductSlider />
    </div>
  );
};

export default ProductDetails;
