import React, { useState } from "react";
import { catelogue } from "../../../shared/config/constants";

import CatelogueCard from "../partials/CatelogueCard";

const Catelog = () => {
  const [active, setActive] = useState(1);

  const handleOnClick = (index) => {
    setActive(index);
  };

  return (
    <div className="md:container mx-auto pl-9 pr-8 w-full overflow-hidden mt-[100px]">
      <h1 className="md:text-[56px] text-4xl text-center md:leading-[67px] text-[#1E1E1E] mb-6 font-black">
        Our Catalogue
      </h1>
      <p className="text-[#53616E] text-2xl text-center font-bold">
        Browse through our product catalogue and get the best value for your
        money
      </p>
      <div className="flex justify-between items-center mt-[100px]">
        <button
          className={`transition-all duration-300 ease-in-out text-base px-7 py-[10px] rounded-[10px] font-semibold ${
            active === 1 ? "bg-[#1E1E1E] text-white" : "bg-none text-[#53616E]"
          }  `}
          onClick={() => handleOnClick(1)}
        >
          All
        </button>
        <button
          className={`transition-all duration-300 ease-in-out text-base px-7 py-[10px] rounded-[10px] font-semibold ${
            active === 2 ? "bg-[#1E1E1E] text-white" : "bg-none text-[#53616E]"
          }  `}
          onClick={() => handleOnClick(2)}
        >
          Hot
        </button>
        <button
          className={`transition-all duration-300 ease-in-out text-base px-7 py-[10px] rounded-[10px] font-semibold ${
            active === 3 ? "bg-[#1E1E1E] text-white" : "bg-none text-[#53616E]"
          }  `}
          onClick={() => handleOnClick(3)}
        >
          Newly Arrived
        </button>
        <button
          className={`transition-all duration-300 ease-in-out text-base px-7 py-[10px] rounded-[10px] font-semibold ${
            active === 4 ? "bg-[#1E1E1E] text-white" : "bg-none text-[#53616E]"
          }  `}
          onClick={() => handleOnClick(4)}
        >
          Highest Priced
        </button>
        <button
          className={`transition-all duration-300 ease-in-out text-base px-7 py-[10px] rounded-[10px] font-semibold ${
            active === 5 ? "bg-[#1E1E1E] text-white" : "bg-none text-[#53616E]"
          }  `}
          onClick={() => handleOnClick(5)}
        >
          Lowest Priced
        </button>

        <button className="flex bg-[#F5F5F7] items-center justify-between p-[10px] rounded-[10px] gap-3 pl-5 font-semibold text-[#53616E]">
          <img src="/images/filter.svg" alt="filter" />
          Filters
        </button>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-[100px]">
        {catelogue?.map((data, index) => (
          <CatelogueCard {...data} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Catelog;
