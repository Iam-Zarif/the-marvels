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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Banner></Banner> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/addToy", element: <AddToy></AddToy> },
      { path: "/myToys", element: <MyToys></MyToys> },
      { path: "/allToys", element: <AllToys></AllToys> },
    ],
  },
  { path: "/*", element: <Error></Error> },
]);
export default router