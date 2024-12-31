import { createBrowserRouter } from "react-router-dom";
import PagesLayouts from "../layouts/PagesLayouts";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayouts></PagesLayouts>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);
export default router;
