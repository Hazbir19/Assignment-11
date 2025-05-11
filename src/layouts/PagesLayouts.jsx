import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PagesLayouts = () => {
  return (
    <>
      <div className="bg-[#fcfbfd] ">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="max-w-screen-xl mx-auto ">
          <div className="min-h-[calc(100vh-15rem)] sm:px-6 lg:px-8 py-4">
            <Outlet></Outlet>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default PagesLayouts;
