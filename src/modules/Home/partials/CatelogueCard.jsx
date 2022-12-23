import React from "react";
import { catelogue } from "../config/constants";

const CatelogueCard = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mt-[100px]">
      {catelogue?.map(
        ({ categoryImage, title, price, mainPrice, rating }, index) => (
          <div className="mb-[50px]">
            <div
              className="relative bg-[#F5F5F7] w-[300px] h-[360px] rounded-[10px]"
              key={index}
            >
              <div className="bg-white w-[36px] h-[36px] flex justify-center items-center rounded-full text-right absolute right-5 top-3">
                <img src="/images/love.svg" alt="love" />
              </div>
              <div className="w-fit h-fit -z-50">
                <img
                  src={categoryImage}
                  alt={title}
                  className="w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center px-[5px] w-fit bg-[#FF6B00] rounded-[25px] absolute right-5 z-50">
                <div className="w-fit h-fit ">
                  <img src="/images/star.svg" alt="star" />
                </div>
                <h2 className="font-semibold text-base text-white ">
                  {rating}
                </h2>
              </div>
            </div>
            <div className="flex justify-between items-center mt-7 pr-5">
              <h1 className="font-black text-base text-[#1E1E1E]">{price}</h1>
              <h2 className="font-black text-base line-through text-[#53616E]">
                {mainPrice}
              </h2>
            </div>
            <div className="flex justify-between items-center mt-7 pr-5">
              <h1 className="font-black text-base text-[#1E1E1E]">{title}</h1>
              <div className="bg-[#F5F5F7] w-[36px] h-[36px] flex justify-center items-center rounded-full text-right">
                <img src="/images/basket.svg" alt="basket" />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CatelogueCard;
