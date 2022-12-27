import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductSlider = () => {
  return (
    <div>
      <Carousel interval="500" transitionTime="500" showArrows={false}>
        <div className="">
          <img
            src="/images/product1.svg"
            alt="headphone"
            className="!w-[550px] bg-[#F5F5F7] rounded-xl "
          />
        </div>
        <div>
          <img
            src="/images/product2.svg"
            alt="headphone"
            className="!w-[550px] bg-[#F5F5F7] rounded-xl "
          />
        </div>
        <div>
          <img
            src="/images/product3.svg"
            alt="headphone"
            className="!w-[550px] bg-[#F5F5F7] rounded-xl "
          />
        </div>
        <div>
          <img
            src="/images/product4.svg"
            alt="headphone"
            className="!w-[550px] bg-[#F5F5F7] rounded-xl "
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
