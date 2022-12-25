import React from "react";
import CatelogueCard from "../../Home/partials/CatelogueCard";

const RelatedProduct = () => {
  return (
    <div className="md:container mx-auto  pl-9 pr-8 w-full mt-[150px] -z-50">
      <h1 className="font-black text-[#1E1E1E] text-[56px] leading-[57px] mb-[70px]">
        You might also like
      </h1>
      <CatelogueCard />
    </div>
  );
};

export default RelatedProduct;
