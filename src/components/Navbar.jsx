import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { link: "/", text: "Home" },
    { link: "/invoices", text: "Invoices" },
    { link: "/companies", text: "Companies" },
    { link: "/contacts", text: "Contacts" },
  ];

  /*  STYLE SWITCH FOR SIDE MENU  */
  const toggleStyles = isMenuOpen
    ? "mb-1 hover:border-r-4 border-[#f9de4e] flex items-center p-4 hover:bg-gray-100 hover:text-gray-600 rounded"
    : "text-sm p-2";

  /* SHOW ACTIVE VIEW */
  const renderedMenuItems = menuItems.map((item, index) => {
    const isActive = location.pathname === item.link && !isMenuOpen;
    const activeStyles = isActive ? "border border-black" : "";

    return (
      <li key={index}>
        <Link to={item.link} className={`${toggleStyles} ${activeStyles}`}>
          {item.text}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <nav className="relative justify-between px-4 py-4 flex items-center bg-[#f9de4e]">
        <div className="flex items-center w-full lg:w-auto">
          <Link
            to="/"
            className="text-3xl font-bold leading-none mr-6 lg:mr-20"
          >
            COGIP
          </Link>
          <button
            className="navbar-burger flex items-center text-black bg-transparent p-2 lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="block h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 font-semibold">
            {renderedMenuItems}
          </ul>
        </div>
        <a
          className="hidden font-semibold lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a>
        <Link
          to="dashboard"
          className="hidden lg:inline-block py-2 px-6 text-sm transition duration-200 font-semibold"
        >
          Login
        </Link>
      </nav>

      {/* MOBILE / SIDE BAR */}
      <div
        className={`navbar-menu ${
          isMenuOpen ? "block" : "hidden"
        } navbar-menu relative z-50`}
      >
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-4 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link
              to="/"
              className="mr-auto text-3xl font-bold leading-none pl-4"
            >
              COGIP
            </Link>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="pl-6">{renderedMenuItems}</ul>
          <div className="mt-auto">
            <div className="pt-6 px-2">
              <a
                className="block mb-3 p-3 leading-loose text-xs text-center font-semibold leading-none hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign up
              </a>
              <Link
                to="dashboard"
                className="block mb-3 p-2 leading-loose text-xs text-center font-semibold bg-[#f9de4e] hover:bg-yellow-200 rounded-xl"
              >
                Login
              </Link>
            </div>
            <p className="my-4 text-xs text-center">
              <span>by BibouTeam ❤️‍🔥</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};
