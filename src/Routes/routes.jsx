import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Banner from "../Pages/Home/Banner/Banner";
import Blogs from "../Pages/Home/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/Home/MyToys/MyToys";
import AllToys from "../Pages/Home/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import SignleToy from "../Pages/Home/AllToys/SignleToy";
import MyToysUpdate from "../Pages/Home/MyToys/MyToysUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Banner></Banner> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/blogs", element: <Blogs></Blogs> },
      {
        path: "/update/:id",
        element: <MyToysUpdate></MyToysUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-pied-psi.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      { path: "/allToys", element: <AllToys></AllToys> },
      {
        path: "/alltoys/:id",
        element: (
          <PrivateRoutes>
            <SignleToy></SignleToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-pied-psi.vercel.app/allToys/${params.id}`
          ),
      },
    ],
  },
  { path: "/*", element: <Error></Error> },
]);
export default router