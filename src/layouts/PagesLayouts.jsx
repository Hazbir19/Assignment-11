import React from "react";
import { Outlet } from "react-router-dom";

const PagesLayouts = () => {
  return (
    <>
      <div>
        <div>
          <h1>Pages Layouts</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default PagesLayouts;
