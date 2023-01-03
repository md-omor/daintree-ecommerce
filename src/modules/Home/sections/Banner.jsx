import React from "react";

const Banner = () => {
  return (
    <div className="md:container mx-auto flex items-start justify-between pl-9 pr-8 w-full overflow-hidden">
      <div className="mt-[90px]">
        <div className="flex gap-2">
          <h1 className="text-[#53616E] text-base">Up to 70% off on deals</h1>
          <img src="/images/fire.svg" alt="fire" />
        </div>
        <p className="mt-6 text-[#1E1E1E] text-[56px] leading-[75px] md:w-[600px] w-full">
          The best products from global brands at the most affordable prices
        </p>
        <p className="text-[#53616E] text-[20px] leading-[35px] mt-5 md:w-[602px] w-full">
          daintree provides the world’s largest marketplace where customers can
          shop for products from thousands of vendors
        </p>

        <div class="relative mt-[50px]">
          <div class="absolute inset-y-0 left-0 flex items-center pl-[45px] pointer-events-none">
            <img src="/images/search.svg" alt="search" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-[597px] h-[65px]  pl-[80px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-0 bottom-0 bg-[#1E1E1E] w-[165px] h-[65px] font-medium rounded-[0px_10px_10px_0px] text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>

        <div className="flex gap-[90px] mt-[77px]">
          <div className="flex flex-col">
            <h1 className="text-[#1E1E1E] text-3xl mb-5">10M+</h1>
            <p className="text-[#53616E] text-xl ">Verified Products</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#1E1E1E] text-3xl mb-5">1M+</h1>
            <p className="text-[#53616E] text-xl ">Customers</p>
          </div>
        </div>
      </div>
      <div className="md:w-[530px] md:h-[755px] w-full h-full">
        <img
          src="/images/bannerImage.svg"
          alt="banner"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
