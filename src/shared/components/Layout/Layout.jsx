import React from "react";

//
import Footer from "../Footer";
import FooterNav from "../FooterNav";
import Header from "../Header";

// default layout configuration
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FooterNav />
    </>
  );
};
export default Layout;
