import { Link } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutUser =() =>{
logOut().then(result =>{console.log(result)}).catch(error => console.log(error))
  }
  
  // console.log(user)
    return (
      <div className="fixed top-0 z-10 w-full ">
        <div className="navbar bg-black opacity-70 py-7">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Item 1</Link>
                </li>
                <li tabIndex={0}>
                  <Link className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Item 3</Link>
                </li>
              </ul>
            </div>
            <img
              src="https://i.ibb.co/GJw5SHD/Avengers-Endgame-Heroic-Logo-Men-s-T-Shirt-Black-4-XL.jpg"
              className="w-14 border rounded-full ml-5"
              alt=""
            />
            <Link className="ml-2 normal-case text-xl">
              <span className="text-3xl text-yellow-600 font-extrabold logoName">
                MARVEL
              </span>{" "}
              Toys
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5">
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link to="/allToys">All Toys</Link>
              </li>

              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link to="/addToy">Add a Toy</Link>
              </li>

              <>
                <li className="hover:border hover:rounded-xl text-lg font-semibold">
                  <Link to="/myToys">My Toys</Link>
                </li>
              </>

              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex flex-col ml-20 lg:flex-row lg:mt-0 gap-6 mt-5">
            <div className="">
              {user ? (
                <div className="tooltip" data-tip={user.displayName}>
                  <img
                    src={user.photoURL}
                    alt="image"
                    className=" w-10 rounded-full"
                  />
                </div>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="border text-lg font-bold hover:border-yellow-500 px-4 py-2 rounded-xl"
                  >
                    Log in
                  </Link>
                </div>
              )}
            </div>
            <div>
              {user ? (
                <div>
                  <button
                    className="border text-lg font-bold hover:border-yellow-500 px-4 py-2 rounded-xl"
                    onClick={logOutUser}
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div>
                  <Link
                    to="/register"
                    className="border text-lg font-bold hover:border-yellow-500 px-4 py-2 rounded-xl"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;