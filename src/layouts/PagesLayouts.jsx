import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PagesLayouts = () => {
  return (
    <>
      <div className="bg-[#fcfbfd] ">
        <div className="max-w-screen-xl mx-auto ">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="min-h-[calc(100vh-15rem)] sm:px-6 lg:px-8 py-12">
            <Outlet></Outlet>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesLayouts;
