import React from "react";
import { Avatar } from "./Avatar";
import { Link, useLocation } from "react-router-dom";

const NavbarItem = ({ link, text, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  const activeStyle = isActive ? "border-r-4 border-[#9798d6] font-semibold" : "";
  return (
    <li className="mb-1">
      <Link
        className={`flex gap-4 md:ml-6 mb-8 items-center py-1 justify-center md:justify-start hover:border-r-4 border-[#9798d6] hover:text-[#9798d6] ${activeStyle}`}
        to={link}
      >
        <img className="h-5 w-5" src={icon} alt="icon" />
        <span className="hidden md:block">{text}</span>
      </Link>
    </li>
  );
};

const ProfileSection = () => (
  <div className="flex flex-col items-center border-b border-gray-200 py-6 my-4 md:my-8">
    <Avatar name="desanuser" width="w-8 md:w-12" height="h-8 md:h-12" />
    <h3 className="flex flex-col text-2xl py-4 text-center font-bold hidden md:block">
      <span>Henry </span>
      <span className="block -mt-2">Georges</span>
    </h3>
  </div>
);

const FooterSection = () => (
  <div className="mt-auto border-t border-gray-200 flex justify-between p-2">
    <Avatar name="desanuser" width="w-6" height="h-6 hidden md:block" />
    <Link to="/" className="text-[#9798d6]">
      Log out
    </Link>
  </div>
);

export const DashboardNav = () => {
  const menuItems = [
    { link: "/dashboard", text: "Home", icon: "/icons/Icon_dashboard.png" },
    {
      link: "/dashboard/invoices",
      text: "Invoices",
      icon: "/icons/Icon_Invoices.png",
    },
    {
      link: "/dashboard/companies",
      text: "Companies",
      icon: "/icons/Icon_Companies.png",
    },
    {
      link: "/dashboard/contact",
      text: "Contact",
      icon: "/icons/Icon_contact.png",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-[15%] max-w-sm bg-white border-r overflow-y-auto">
      <ProfileSection />
      <ul>
        {menuItems.map((item, index) => (
          <NavbarItem key={index} link={item.link} text={item.text} icon={item.icon} />
        ))}
      </ul>
      <FooterSection />
    </nav>
  );
};
