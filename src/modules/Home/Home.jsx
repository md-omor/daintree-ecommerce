import React from "react";
import Banner from "./sections/Banner";
import Brands from "./sections/Brands";
import Category from "./sections/Category";
import Catelog from "./sections/Catelogue";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Catelog />
      <Brands />
    </div>
  );
};

export default Home;
