import { createBrowserRouter } from "react-router-dom";
import PagesLayouts from "../layouts/PagesLayouts";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayouts></PagesLayouts>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
export default router;
