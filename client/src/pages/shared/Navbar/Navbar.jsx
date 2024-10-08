import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/menu"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-w-screen-xl fixed z-10 navbar text-white bg-black bg-opacity-35 backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-inter"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-semibold font-cinzel h-full">
            LogicCaffe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 font-inter max-sm:hidden">
            {navLinks}
          </ul>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
