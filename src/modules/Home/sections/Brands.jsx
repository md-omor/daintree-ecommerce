import React from "react";
import { brands } from "../config/constants";

const Brands = () => {
  return (
    <div className="md:container mx-auto pl-9 pr-8 w-full overflow-hidden mt-[100px]">
      <h1 className="md:text-[56px] text-4xl text-left md:text-center md:leading-[67px] text-[#1E1E1E] mb-6 font-black">
        Shop by Brands
      </h1>
      <p className="text-[#53616E] text-base md:text-2xl text-left md:text-center font-bold">
        Browse through our product catalogue and get the best value for your
        money
      </p>
      <div className="flex md:justify-between justify-center flex-wrap mt-[100px] items-center">
        {brands?.map(({ brandsImage }, index) => (
          <div className="bg-[#1E1E1E] w-[300px] h-[150px] rounded-[10px] flex items-center justify-center mb-[50px]">
            <img src={brandsImage} alt="brandsImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
