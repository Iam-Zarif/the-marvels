import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:border hover:rounded-xl  font-semibold">
        <NavLink 
        exact
        className="link" activeClassName ="active" to="/">Home</NavLink>
      </li>
      <li className="hover:border hover:rounded-xl  font-semibold">
        <NavLink className="link" activeClassName ="active" to="/allToys">All Toys</NavLink>
      </li>

      <li className="hover:border hover:rounded-xl  font-semibold">
        <NavLink className="link" activeClassName ="active" to="/addToy">Add a Toy</NavLink>
      </li>

      <li className="hover:border hover:rounded-xl  font-semibold">
        <NavLink className="link" activeClassName ="active" to="/myToys">My Toys</NavLink>
      </li>

      <li className="hover:border hover:rounded-xl  font-semibold">
        <NavLink className="link" activeClassName ="active" to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  const { user, logOut } = useContext(AuthContext);
  const logOutUser =() =>{
logOut().then(result =>{console.log(result)}).catch(error => console.log(error))
  }
  
  // console.log(user)
    return (
      <div className="fixed top-0 z-10 w-full ">
        <div className="navbar bg-black opacity-80 py-2 pt-4">
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
               {navLinks}
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
              {/*  */}
              {navLinks}
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