import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import ContextApi from "./Context/ContextApi.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </ContextApi>
  </StrictMode>
);
