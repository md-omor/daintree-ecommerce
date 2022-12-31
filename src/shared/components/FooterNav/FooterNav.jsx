import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="md:container md:hidden mx-auto fixed py-8 bottom-0 bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.25)] flex md:flex-nowrap flex-wrap items-start justify-between md:pl-9 md:pr-8 px-10 w-full z-50">
      <Link to="/">
        <img src="/images/home.svg" alt="home" />
      </Link>
      <Link to="/">
        <img src="/images/searchHeader.svg" alt="search" />
      </Link>
      <Link to="/">
        <img src="/images/signinIcon.svg" alt="signinIcon" />
      </Link>
      <Link to="/">
        <img src="/images/basketBlack.svg" alt="basket" />
      </Link>
    </div>
  );
};

export default FooterNav;
