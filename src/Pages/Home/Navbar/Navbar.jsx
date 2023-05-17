import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
      <>
        <div className="navbar bg-base-100 mt-5">
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
              src="https://w0.peakpx.com/wallpaper/366/367/HD-wallpaper-avengers-logo-marvel.jpg"
              className="w-14 border rounded-full ml-5"
              alt=""
            />
            <Link className="ml-2 normal-case text-xl">
              <span className="text-3xl text-yellow-600 font-extrabold logoName">MARVEL</span> Toys
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5">
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link>All Toys</Link>
              </li>
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link>My Toys</Link>
              </li>
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link>Add a Toy</Link>
              </li>
              <li className="hover:border hover:rounded-xl text-lg font-semibold">
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQoR7iZKYVtn4CjWkoNsXCNbT6CUoYtUjYA&usqp=CAU"
              alt=""
              className="rounded-full w-16"
            />
          </div>
        </div>
      </>
    );
};

export default Navbar;