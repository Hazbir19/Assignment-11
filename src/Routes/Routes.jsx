import { createBrowserRouter } from "react-router-dom";
import PagesLayouts from "../layouts/PagesLayouts";
import HomePage from "../pages/HomePage";

import RegisterPage from "../pages/RegisterPage";
import AddTuitorial from "../pages/AddTuitorial";
import PrivateRouter from "../Private/PrivateRouter";
import MyTuitorial from "../pages/MyTuitorial";
import TuitorDetails from "../pages/TuitorDetails";

import MyBooked from "../pages/MyBooked";
import Update from "../pages/Update";
import AllTuitor from "../pages/AllTuitor";
import ErrorPage from "../Components/ErrorPage";
import LoginPage from "../pages/LoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayouts></PagesLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/find-tuitor",
        element: <AllTuitor></AllTuitor>,
        loader: () =>
          fetch("https://assignment-11-server-six-liard.vercel.app/tuitorial"),
      },
      {
        path: "/details/:id",
        element: <TuitorDetails></TuitorDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-six-liard.vercel.app/tuitorial/${params.id}`,
            {
              withCredentials: true,
            }
          ),
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
      {
        path: "/update/:id",
        element: (
          <PrivateRouter>
            <Update></Update>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-six-liard.vercel.app/mytuitorials/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
