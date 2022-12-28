import React, { useState } from "react";

const FullDetails = ({
  title,
  ratings,
  reviews,
  offerPrice,
  mainPrice,
  description,
  cart,
}) => {
  const [count, setCount] = useState(cart);

  const increment = () => {
    setCount((prevCount) => (prevCount += 1));
  };

  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  return (
    <div>
      <div className="flex gap-8">
        <h3 className="text-[#1E1E1E] font-normal text-sm ">Gadgets</h3>
        <h3 className="text-[#1E1E1E] font-normal text-sm ">Laptops</h3>
        <h3 className="text-[#53616E] font-normal text-sm opacity-50">
          {title}
        </h3>
      </div>
      <h1 className="my-10 text-[#1E1E1E] md:text-[56px] md:leading-[56px] text-3xl w-full font-black">
        {title}
      </h1>
      <div className="flex gap-5">
        <div className="">
          <img src="/images/stars.svg" alt="star" />
        </div>
        <div className="flex gap-1">
          <h3 className="text-[#1E1E1E] font-semibold text-sm ">{ratings}</h3>
          <h2 className="text-[#1E1E1E] font-normal text-sm opacity-50">
            ({reviews})
          </h2>
        </div>
      </div>

      <div className="flex mt-3 gap-5 items-center">
        <h1 className="text-3xl text-[#1E1E1E] font-semibold ">{offerPrice}</h1>
        <h2 className="text-[#53616E] font-medium text-base">{mainPrice}</h2>
      </div>
      <p className="text-[#1E1E1E] font-medium md:w-[560px] w-full leading-[24px] text-sm mt-4">
        {description}
      </p>
      <p className="font-normal text-[#1E1E1E] text-xs mt-10">Quantity</p>
      <div className="flex border border-[#F1F1F1] rounded-3xl w-[108px] items-center justify-evenly mt-6 py-2">
        <p className="font-bold text-xl cursor-pointer" onClick={decrement}>
          -
        </p>
        <p className="font-normal text-sm">{count}</p>
        <p className="font-bold text-xl cursor-pointer" onClick={increment}>
          +
        </p>
      </div>
      <p className="font-normal text-[#1E1E1E] text-xs mt-10">Choose Color</p>
      <div className="flex gap-6 mt-6">
        <button className="bg-[#3A3A3A] w-10 h-10 rounded-full  focus:ring-4 focus:ring-[#1E1E1E]"></button>
        <button className="bg-[#FF0071] w-10 h-10 rounded-full  focus:ring-4 focus:ring-[#FF0071]"></button>
        <button className="bg-[#CFDADD] w-10 h-10 rounded-full  focus:ring-4 focus:ring-[#CFDADD]"></button>
      </div>
      <div className="flex gap-2 flex-wrap w-full mt-12">
        <button className="flex items-center justify-center gap-2 bg-[#1E1E1E] rounded-md w-[240px] py-4 font-bold text-lg text-[#FFFFFF]">
          <img src="/images/whiteBasket.svg" alt="basket" />
          Add to Basket
        </button>
        <button className="flex items-center justify-center gap-2 hover:bg-[#1E1E1E] rounded-md w-[200px] py-4 font-normal text-base text-[#1E1E1E] transition-all duration-300 ease-in-out hover:text-[#FFFFFF]">
          <img src="/images/love.svg" alt="love" />
          Save to Wishlist
        </button>
      </div>
      <p className="font-normal text-[#53616E] text-sm mt-5">
        Next-day delivery available only for daintree prime subscribers
      </p>
    </div>
  );
};

export default FullDetails;
