import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PagesLayouts = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-purple-400/40 to-white ">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-15rem)]">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default PagesLayouts;
