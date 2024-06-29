import { BsBuildings } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLink = (
        <div className=" flex md:flex-row flex-col font-semibold mt-5">
          <NavLink className="mr-5" to="/">
            Home
          </NavLink>
          <NavLink className="mr-5" to="/assigment">
          Apartment
          </NavLink>
          <NavLink className="mr-5" to="/blog">
            Blog
          </NavLink>
          <NavLink className="mr-5" to="/contact">
            ContactUs
          </NavLink>
          <NavLink className="mr-5" to="/contact">
            Dashboard
          </NavLink>
        </div>
      );

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><BsBuildings className="text-sky-400 text-4xl font-bold" />LuxTower</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;