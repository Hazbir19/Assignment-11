import { createBrowserRouter } from "react-router-dom";
import PagesLayouts from "../layouts/PagesLayouts";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddTuitorial from "../pages/AddTuitorial";
import PrivateRouter from "../Private/PrivateRouter";
import MyTuitorial from "../pages/MyTuitorial";
import TuitorDetails from "../pages/TuitorDetails";
import FindTuitor from "../pages/FindTuitor";
import MyBooked from "../pages/MYBooked";
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
      {
        path: "/find-tuitorial",
        element: <FindTuitor></FindTuitor>,
      },
      {
        path: "/add-tuitorial",
        element: (
          <PrivateRouter>
            <AddTuitorial></AddTuitorial>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-tuitorial",
        element: (
          <PrivateRouter>
            <MyTuitorial></MyTuitorial>
          </PrivateRouter>
        ),
      },
      {
        path: "/tuitorial-details",
        element: (
          <PrivateRouter>
            <TuitorDetails></TuitorDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/mybooked-tuitor",
        element: (
          <PrivateRouter>
            <MyBooked></MyBooked>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
