import { useContext, useEffect, useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  //--------------------------
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  // console.log(theme);
  //--------------------

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("user log Out succefully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // console.log(user);
  // //------------------------

  const navLink = (
    <div className=" flex md:flex-row flex-col font-semibold mt-5">
      <NavLink className="mr-5" to="/">
        Home
      </NavLink>
      <NavLink className="mr-5" to="/apartments">
        Apartment
      </NavLink>
      <NavLink className="mr-5" to="/blog">
        Blog
      </NavLink>

      {user && (
        <>
          <NavLink className="mr-5" to="/dashboard">
            Dashboad
          </NavLink>
        </>
      )}
      <NavLink className="mr-5" to="/contact">
        ContactUs
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
          <div className="dropdown dropdown-end z-50">
            {
              user ? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-24 rounded-full">
                    <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>

                    <div className="text-sky-400 text-lg font-medium" >{user?.displayName || "user name not found"}</div>
                  </li>
                  <li>
                    <NavLink className="mr-5 text-lg text-sky-400" to="/dashboard">
                      Dashboad
                    </NavLink>

                    <NavLink to="/signup" className="text-sky-400 text-lg mt-2 font-semibold">
                      <button onClick={handleLogOut}>Logout</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
                :
                <Link to={'/signin'}><button className="">
                  <img className="w-10 flex rounded-full" src="https://i.ibb.co/jh6zM89/Screenshot-11.png" alt="" />
                  </button></Link>
            };
            
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleToggle}
                type="checkbox"
                className="toggle theme-controller " value="synthwave"
              // value="synthwave"
              />
            </label>

            {/* dark light end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;