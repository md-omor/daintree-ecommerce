import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setyear] = useState();

  useEffect(() => {
    const fullYear = new Date().getFullYear();
    setyear(fullYear);
  }, []);

  return (
    <>
      <div className="-z-5">
        <div className="px-10 py-[100px] md:container mx-auto  -z-50">
          <div className="flex gap-5 flex-wrap md:justify-evenly justify-between items-start h-full">
            <div className="flex flex-col">
              <h2 className="font-medium text-lg text-[#1E1E1E] mb-10">
                Partners
              </h2>

              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Pricing</Link>
              </span>
              <span className=" font-medium text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Advertise</Link>
              </span>
              <span className=" font-medium text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Blog</Link>
              </span>
              <span className=" font-medium text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <a href="#faq"> Newsletter</a>
              </span>
              <span className=" font-medium text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <a href="#faq"> Collaborations</a>
              </span>
            </div>
            <div className="flex flex-col ">
              <h2 className="font-medium text-lg text-[#1E1E1E] mb-10">
                Payment
              </h2>

              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link>Mastercard</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Visa</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">American Express</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Privacy</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Paypal</Link>
              </span>
            </div>

            <div className="flex flex-col ">
              <h2 className="font-medium text-lg text-[#1E1E1E] mb-10">
                Buying
              </h2>

              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Track Orders</Link>{" "}
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Returns</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Help Center</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Pickups & Deliveries</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Accessibility</Link>
              </span>
            </div>

            <div className=" flex flex-col ">
              <h2 className="font-medium text-lg text-[#1E1E1E] mb-10">
                Resources
              </h2>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Tutorials</Link>{" "}
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Editorials</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Communities</Link>
              </span>{" "}
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Newsroom</Link>
              </span>
            </div>

            <div className="flex flex-col">
              <h2 className="font-medium text-lg text-[#1E1E1E] mb-10">
                About
              </h2>

              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Company</Link>{" "}
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Careers</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Legal</Link>
              </span>
              <span className="font-medium  text-[14px] leading-[30px] text-[#1E1E1E] opacity-80 py-1">
                <Link to="/">Help</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full px-3 lg:px-20 mb-6 md:mb-0 ">
        <div className="container mx-auto pt-8 pb-[35px]">
          <h2 className="font-medium text-base text-center text-[#1E1E1E]">
            © {year} Daintree Inc, All rights reserved.
          </h2>
          <div className="flex justify-center gap-6 mt-6">
            <div className="cursor-pointer">
              <img src="/images/facebook.svg" alt="facebook" />
            </div>
            <div className="cursor-pointer">
              <img src="/images/twitter.svg" alt="twitter" />
            </div>
            <div className="cursor-pointer">
              <img src="/images/instagram.svg" alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
