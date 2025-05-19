import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PagesLayouts = () => {
  return (
    <>
      <div className="bg-[#fcfbfd] overflow-x-hidden ">
        <div>
          <Navbar></Navbar>
        </div>

        <div className="min-h-[calc(100vh-15rem)] max-w-screen-xl mx-auto overflow-x-hidden">
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
