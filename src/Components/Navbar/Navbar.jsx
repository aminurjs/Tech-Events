import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log-out successful");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  const menus = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Services", path: "/services" },
    { id: "3", name: "Schedule", path: "/schedule" },
    { id: "4", name: "Contact", path: "/contact" },
  ];
  return (
    <div className="absolute w-full top-0 z-10">
      <div className="max-w-7xl mx-auto py-2 px-5 lg:px-0 border-b border-gray-800">
        <div className="navbar">
          <div className="flex-1 gap-12">
            <Link to={"/"}>
              <img src="https://i.ibb.co/w4B90KD/Group-481775.png" alt="" />
            </Link>
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
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-white lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 -right-10"
              >
                {menus.map((menu) => (
                  <li key={menu.id}>
                    <NavLink to={menu.path}>{menu.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>{" "}
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full bg-white">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co/wYyhNfG/icons8-male-user-100.png"
                      }
                    />
                  </div>
                </label>
                <div
                  tabIndex={1}
                  className="mt-3 z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box p-5 min-w-[220px]"
                >
                  <label className="avatar text-center mx-auto">
                    <div className="w-16 rounded-full bg-white ">
                      <img
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : "https://i.ibb.co/wYyhNfG/icons8-male-user-100.png"
                        }
                      />
                    </div>
                  </label>
                  <h2 className="mt-2 mb-4 text-black font-medium text-center">
                    Name: {user?.displayName}
                  </h2>
                  <button onClick={handleLogOut} className="btn btn-sm">
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to={"/login"}
                className=" font-medium text-[#33BBCF] border border-[#33BBCF] py-1.5 px-3 md:py-2 md:px-4 rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default Navbar;
