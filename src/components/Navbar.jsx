import React, { useState } from "react";

const NavbarItem = ({ link, text }) => {
  return (
    <li>
      <a className="text-sm p-2" href={link}>
        {text}
      </a>
    </li>
  );
};

const MobileNavbarItem = ({ link, text }) => {
  return (
    <li className="mb-1">
      <a
        className="block p-4 text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-black rounded"
        href={link}
      >
        {text}
      </a>
    </li>
  );
};

const menuItems = [
  { link: "/", text: "Home" },
  { link: "/invoices", text: "Invoices" },
  { link: "/companies", text: "Companies" },
  { link: "/contacts", text: "Contact" },
];

const renderedMenuItems = menuItems.map((item, index) => (
  <NavbarItem key={index} link={item.link} text={item.text} />
));

const renderedMobileMenuItems = menuItems.map((item, index) => (
  <MobileNavbarItem key={index} link={item.link} text={item.text} />
));

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="relative justify-between px-6 py-4 flex items-center bg-[#f9de4e]">
        <div className="flex items-center w-full lg:w-auto">
          <a className="text-3xl font-bold leading-none mr-6 lg:mr-20" href="#">
            COGIP
          </a>
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
        <a
          className="hidden lg:inline-block py-2 px-6 text-sm transition duration-200 font-semibold"
          href="#"
        >
          Login
        </a>
      </nav>
      <div
        className={`navbar-menu ${
          isMenuOpen ? "block" : "hidden"
        } navbar-menu relative z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-4 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              COGIP
            </a>
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
          <ul>{renderedMobileMenuItems}</ul>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block mb-3 p-3 leading-loose text-xs text-center font-semibold leading-none hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign up
              </a>
              <a
                className="block mb-3 p-2 leading-loose text-xs text-center font-semibold bg-[#f9de4e] hover:bg-yellow-200 rounded-xl"
                href="#"
              >
                Login
              </a>
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
