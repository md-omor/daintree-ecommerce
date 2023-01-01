import { Burger } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="relative bg-white py-10 border-b border-[#CFDADD]">
      <div className="mx-auto md:container flex items-center justify-between flex-wrap lg:flex-nowrap px-10 !pl-8">
        <div className="flex items-center justify-between lg:w-auto w-full lg:border-b-0  ">
          <Link to="/">
            <div className="flex items-center flex-shrink-0 w-[145px] mr-16 cursor-pointer">
              <img
                src="/images/DAINTREE.svg"
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </Link>

          <div className="block lg:hidden ">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              color="#2A2D3A"
            />
          </div>
          <div className="text-gray-500 order-3 w-full lg:w-auto lg:order-2">
            <div
              className={
                opened
                  ? "menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[0] z-50 bg-black pb-5 transition duration-[0.4s] ease-in-out"
                  : " menu w-full lg:block flex-grow lg:items-center lg:w-auto lg:px-3 px-6 lg:relative absolute lg:top-0 lg:left-0 top-[80px] -left-[110%] transition duration-[0.4s] ease-in-out"
              }
            >
              <ul class="flex font-semibold justify-between items-center lg:flex-row flex-col">
                <li className="text-[#1E1E1E] lg:px-[36px] font-semibold font-[450] text-lg active:opacity-100 hover:opacity-100  active lg:p-0 py-2 cursor-pointer">
                  Deals
                </li>
                <li className="text-[#1E1E1E] lg:px-[36px] font-semibold font-[450] text-lg active:opacity-100 hover:opacity-100  active lg:p-0 py-2 cursor-pointer">
                  What’s New
                </li>
                <li className="text-[#1E1E1E] lg:px-[36px] font-semibold font-[450] text-lg active:opacity-100 hover:opacity-100  active lg:p-0 py-2 cursor-pointer">
                  What’s New
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-3 lg:flex hidden items-center gap-[70px]">
          <div className="mr-10">
            <img src="/images/searchHeader.svg" alt="search" />
          </div>

          <div className="flex gap-2 text-[#1E1E1E] font-semibold text-base items-center">
            <Link to="/login">
              <div className="">
                <img src="/images/signinIcon.svg" alt="signinIcon" />
              </div>
            </Link>
            Sign in
          </div>
          <div className=" w-6 h-6 cursor-pointer">
            <img
              src="/images/basket.svg"
              alt="country"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
