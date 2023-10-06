import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menus = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Services", path: "/services" },
    { id: "3", name: "About", path: "/about" },
  ];
  return (
    <div className="absolute w-full top-0 z-10 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="flex-1 gap-12">
            <a>
              <img src="https://i.ibb.co/w4B90KD/Group-481775.png" alt="" />
            </a>
          </div>
          <div className="flex-none gap-6">
            <div className=" hidden lg:flex">
              <ul className="menu-horizontal px-1">
                {menus.map((menu) => (
                  <li className="mr-5" key={menu.id}>
                    <NavLink className="text-white" to={menu.path}>
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <a className=" font-medium text-[#33BBCF] border border-[#33BBCF] py-2 px-4 rounded-md">
              Login
            </a>
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
              >
                {menus.map((menu) => (
                  <li key={menu.id}>
                    <NavLink to={menu.path}>{menu.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
